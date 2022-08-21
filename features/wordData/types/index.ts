export interface WordData {
    word: string;
    results: Result[];
    syllables: Syllables;
    pronunciation: {
        all: string;
    };
    frequency: number;
}

export interface Result {
    definition: string;
    partOfSpeech: PartOfSpeech;
    typeOf: string[];
    antonyms: string[];
    examples: string[];
}

export interface Syllables {
    count: number;
    list: string[];
}

export enum PartOfSpeech {
    NOUN = "noun",
    PRONOUN = "pronoun",
    VERB = "verb",
    ADJECTIVE = "adjective",
    ADVERB = "adverb",
    PREPOSITION = "preposition",
    CONJUNCTION = "conjunction",
    INTERJECTION = "interjection",
}
