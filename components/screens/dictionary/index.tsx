import { FormEvent, useState } from "react";

import { isError, useQuery } from "@tanstack/react-query";
import lexicon from "lexicon.json";
import { MdOutlineMenu } from "react-icons/md";
import { useAudio, useToggle } from "react-use";
import { Language, Lexicon } from "types";

import AppBar from "components/common/AppBar";
import { IconButton } from "components/common/Button";
import Sidebar from "components/common/Sidebar";

import LexiconForm from "./components/LexiconForm";
import LexiconResult from "./components/LexiconResult";
import { getLexicons } from "./proxy/getLexicons";

interface MainProps {}

const Main = ({}: MainProps) => {
    const [word, setWord] = useState<string>("");
    const {
        data: lexicon,
        isFetching: isLexiconFetching,
        isError: isLexiconError,
        isSuccess: isLexiconSuccess,
        refetch: refetchLexicon,
    } = useQuery(["lexicon"], () => getLexicons(Language.ENGLISH, word), {
        enabled: false,
    });

    const [isSidebarOpen, toggleSidebarOpen] = useToggle(false);

    const toDisplayLexicon = () => {
        if (isLexiconFetching) return <div>Loading...</div>;
        if (isLexiconError)
            return (
                <div>Ops, something went wrong, Please try again later.</div>
            );
        if (isLexiconSuccess) return <LexiconResult lexicon={lexicon} />;
    };

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
