import { InferGetStaticPropsType } from "next";
import { FormEvent, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import fsPromises from "fs/promises";
import path from "path";
import { MdOutlineMenu } from "react-icons/md";
import { useEffectOnce, useToggle } from "react-use";
import { Language } from "types";

import AppBar from "components/common/AppBar";
import { IconButton } from "components/common/Button";
import Sidebar from "components/common/Sidebar";

import LexiconForm from "./components/LexiconForm";
import LexiconResult from "./components/LexiconResult";
import { getLexicon } from "./proxies/getLexicon";

const Main = () => {
    const [word, setWord] = useState<string>("");

    const {
        isError,
        isFetching,
        isSuccess,
        refetch: refetchLexicon,
        data: lexicon,
    } = useQuery(["lexicon"], () => getLexicon(Language.US_ENGLISH, word), {
        enabled: false,
    });

    const [isSidebarOpen, toggleSidebarOpen] = useToggle(false);

    const toDisplayLexicon = () => {
        if (isFetching) return <div>Loading...</div>;
        if (isError)
            return <div>Ops, something went wrong, Please try again later</div>;
        if (isSuccess) return <LexiconResult lexicon={lexicon} />;
    };

    console.log(
        "base url",
        process.env.NEXT_PUBLIC_OXFORD_DICTIONARIES_BASE_URL
    );
    console.log("app id", process.env.NEXT_PUBLIC_OXFORD_DICTIONARIES_APP_ID);
    console.log("app key", process.env.NEXT_PUBLIC_OXFORD_DICTIONARIES_APP_KEY);

    return (
        <>
            <AppBar
                leftSideButton={
                    <IconButton onClick={() => toggleSidebarOpen(true)}>
                        <MdOutlineMenu />
                    </IconButton>
                }
                pageName="Quick Dictionary"
            />

            <Sidebar
                open={isSidebarOpen}
                onClose={() => toggleSidebarOpen(false)}
            />

            <main className="mt-24">
                <div className="container">
                    <LexiconForm
                        onSubmit={refetchLexicon}
                        onChangeWordInput={(e) =>
                            setWord(e.target.value.toLowerCase())
                        }
                    />
                    {toDisplayLexicon()}
                </div>
            </main>
        </>
    );
};

export default Main;
