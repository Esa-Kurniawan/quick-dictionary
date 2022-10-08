import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

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
    } = useQuery(["lexicon"], () => getLexicon(word), {
        enabled: false,
    });

    console.log(lexicon)

    const toDisplayLexicon = () => {
        if (isFetching) return <div>Loading...</div>;
        if (isError)
            return <div>Ops, something went wrong, Please try again later</div>;
        if (isSuccess) return <LexiconResult lexicon={lexicon} />;
    };

    return (
        <div className="container">
            <LexiconForm
                onSubmit={refetchLexicon}
                onInputChange={(e) => setWord(e.target.value.toLowerCase())}
            />
            {toDisplayLexicon()}
        </div>
    );
};

export default Main;
