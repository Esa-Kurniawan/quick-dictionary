export interface Phonetic {
    text?: string;
    audio: string;
    sourceUrl?: string;
    license?: License;
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

interface License {
    name: string;
    url: string;
}

export interface Definition {
    definition: string;
    example?: string;
    synonyms: string[];
    antonyms: string[];
}

export interface Meaning {
    partOfSpeech: PartOfSpeech;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
}

export interface Lexicon {
    word: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
    sourceUrls: string[];
    license: License;
}
