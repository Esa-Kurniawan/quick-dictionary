// for wordnik api
// export enum Language {
//     US_ENGLISH = "en-us",
//     UK_ENGLISH = "en-gb",
//     FRENCH = "fn",
// }

export enum Language {
    ENGLISH = "en",
    FRENCH = "fr",
}

export enum Theme {
    DARK = "dark",
    LIGHT = "light",
}

export interface Phonetic {
    text: string;
    audio?: string;
}

enum PartOfSpeech {
    NOUN = "noun",
    PRONOUN = "pronoun",
    VERB = "verb",
    ADJECTIVE = "adjective",
    ADVERB = "adverb",
    PREPOSITION = "preposition",
    CONJUNCTION = "conjunction",
    INTERJECTION = "interjection",
}

export interface Definition {
    definition: string;
    example: string;
    synonyms: string[];
    antonyms: string[];
}

export interface Meaning {
    partOfSpeech: PartOfSpeech;
    definitions: Definition[];
}

export interface Lexicon {
    word: string;
    phonetic: string;
    phonetics: Phonetic[];
    origin: string;
    meanings: Meaning[];
}
