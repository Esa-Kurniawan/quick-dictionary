import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { fadeMotions } from "lib/fadeMotions";

import LexiconForm from "./components/LexiconForm";
import LexiconResult from "./components/LexiconResult";
import LexiconSkeleton from "./components/LexiconSkeleton";
import { getLexicon } from "./proxies/getLexicon";

const Main = () => {
    const [word, setWord] = useState<string>("");

    const {
        isError,
        isFetching,
        isSuccess,
        refetch: refetchLexicon,
        data: lexicon,
        error,
    } = useQuery(["lexicon"], () => getLexicon(word), {
        enabled: false,
    });

    return (
        <div className="container">
            <LexiconForm
                onSubmit={refetchLexicon}
                onInputChange={(e) => setWord(e.target.value.toLowerCase())}
            />

            <AnimatePresence>
                {isFetching && <LexiconSkeleton />}
            </AnimatePresence>

            <AnimatePresence>
                {isError && (
                    <motion.div
                        {...fadeMotions}
                        className="text-center mt-2 text-light-red dark:text-red"
                    >
                        {axios.isAxiosError(error) && error.message}
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isSuccess && !isFetching && (
                    <LexiconResult lexicon={lexicon} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Main;
