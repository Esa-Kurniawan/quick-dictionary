// export interface Phonetic {
//     text: string;
//     audio?: string;
// }
// import { Language } from "types";

type Language = string;

// enum PartOfSpeech {
//     NOUN = "noun",
//     PRONOUN = "pronoun",
//     VERB = "verb",
//     ADJECTIVE = "adjective",
//     ADVERB = "adverb",
//     PREPOSITION = "preposition",
//     CONJUNCTION = "conjunction",
//     INTERJECTION = "interjection",
// }

// export interface Definition {
//     definition: string;
//     example: string;
//     synonyms: string[];
//     antonyms: string[];
// }

// export interface Meaning {
//     partOfSpeech: PartOfSpeech;
//     definitions: Definition[];
// }

// export interface Lexicon {
//     word: string;
//     phonetic: string;
//     phonetics: Phonetic[];
//     origin: string;
//     meanings: Meaning[];
// }

// export enum Language {
//     ENGLISH = "en",
//     FRENCH = "fr",
// }

interface Phrase {
    id: string;
    text: string;
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

interface LexicalCategory {
    id: PartOfSpeech;
    text: string;
}

enum PhoneticNotation {
    RESPELL = "respell",
    IPA = "IPA",
}

interface Pronunciation {
    dialects: string[];
    phoneticNotation: PhoneticNotation;
    phoneticSpelling: string;
    audioFile?: string;
}

interface Example {
    text: string;
}

interface SemanticClass {
    id: string;
    text: string;
}

interface Subsense {
    definitions: string[];
    examples: Example[];
    id: string;
    semanticClasses: SemanticClass[];
    shortDefinitions: string[];
}

interface Synonym {
    language: Language;
    text: string;
}

interface ThesaurusLink {
    entry_id: string;
    sense_id: string;
}

export interface Sense {
    definitions: string[];
    examples: Example[];
    id: string;
    semanticClasses: SemanticClass[];
    shortDefinitions: string[];
    subsenses: Subsense[];
    synonyms: Synonym[];
    thesaurusLinks: ThesaurusLink[];
}

interface Entry {
    etymologies: string[];
    pronunciations: Pronunciation[];
    senses: Sense[];
}

export interface LexicalEntry {
    entries: Entry[];
    language: Language;
    lexicalCategory: LexicalCategory;
    phrases: Phrase[];
    text: string;
}

export interface Lexicon {
    id: string;
    language: Language;
    lexicalEntries: LexicalEntry[];
    type: string;
    word: string;
}
