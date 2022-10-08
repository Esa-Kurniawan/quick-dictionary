import axios from "axios";

import { Lexicon } from "../types";

export const getLexicon = async (word: string): Promise<Lexicon> => {
    const { data: lexicon } = await axios.get(
        `${process.env.NEXT_PUBLIC_FREE_DICTIONARY_API_BASE_URL}/${word}`
    );
    return lexicon[0];
};
