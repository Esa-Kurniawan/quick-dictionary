import axios, { AxiosRequestConfig } from "axios";
import { Endpoint, Language } from "types";

import { Lexicon } from "../types";

const config: AxiosRequestConfig = {
    headers: {
        app_id: process.env.NEXT_PUBLIC_OXFORD_DICTIONARIES_APP_ID!,
        app_key: process.env.NEXT_PUBLIC_OXFORD_DICTIONARIES_APP_ID!,
    },
};

export const getLexicon = async (
    language: Language,
    word: string
): Promise<Lexicon> => {
    const { data: lexicon } = await axios.get(
        `${process.env.NEXT_PUBLIC_OXFORD_DICTIONARIES_BASE_URL}/${Endpoint.ENTRIES}/${language}/${word}`,
        config
    );
    return lexicon;
};
