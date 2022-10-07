import axios from "axios";
import { Endpoint, Language } from "types";

import { Lexicon } from "../types";

export const getLexicon = async (
    language: Language,
    word: string
): Promise<Lexicon> => {
    const { data: lexicon } = await axios.get(
        `${process.env.NEXT_PUBLIC_OXFORD_DICTIONARIES_BASE_URL}/${Endpoint.ENTRIES}/${language}/${word}`
    );
    return lexicon;
};
