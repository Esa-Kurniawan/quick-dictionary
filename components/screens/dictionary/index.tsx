import { FormEvent, useState } from "react";

import { MdOutlineMenu } from "react-icons/md";
import { useToggle } from "react-use";
import { Language, Lexicon } from "types";

import AppBar from "components/common/AppBar";
import { IconButton } from "components/common/Button";
import Sidebar from "components/common/Sidebar";

import LexiconForm from "./components/LexiconForm";
import LexiconResult from "./components/LexiconResult";
import { getLexicons } from "./proxy/getLexicons";

interface MainProps {}

const Main = ({}: MainProps) => {
    const [lexicon, setLexicon] = useState<Lexicon | null>(null);
    const [word, setWord] = useState<string>("");

    const [isSidebarOpen, toggleSidebarOpen] = useToggle(false);

    const fetchLexicon = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (word === "") return;

        const fetchedLexicons = await getLexicons(Language.ENGLISH, word);
        setLexicon(fetchedLexicons[0]);
    };

    return (
        <>
            <AppBar
                leftSideButton={
                    <IconButton onClick={() => toggleSidebarOpen(true)}>
                        <MdOutlineMenu />
                    </IconButton>
                }
                pageName="Dictionary"
            />

            <Sidebar
                open={isSidebarOpen}
                onClose={() => toggleSidebarOpen(false)}
            />

            <main className="mt-24">
                <div className="container">
                    <LexiconForm
                        onSubmit={fetchLexicon}
                        onChangeWordInput={(e) => setWord(e.target.value)}
                    />
                    {lexicon !== null && <LexiconResult lexicon={lexicon} />}
                </div>
            </main>
        </>
    );
};

export default Main;
