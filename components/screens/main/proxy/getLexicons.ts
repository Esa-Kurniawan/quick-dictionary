import axios from "axios";
import { Language, Lexicon } from "types";

export const getLexicons = async (
    language: Language,
    word: string
): Promise<Lexicon[]> => {
    const { data: lexicons } = await axios.get(
        `${process.env.NEXT_PUBLIC_DICTIONARY_API_BASE_URL}/${language}/${word}`
    );
    return lexicons;
};
