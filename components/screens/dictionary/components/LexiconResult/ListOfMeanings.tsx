import { Definition, Meaning } from "types";

interface ListOfDefinitionsProps {
    definitions: Definition[];
}

const ListOfDefinitions = ({ definitions }: ListOfDefinitionsProps) => (
    <ol className="pl-8 flex flex-col gap-2 list-decimal">
        {definitions.map(
            ({ definition, synonyms, antonyms, example }, index) => (
                <li key={index}>
                    <h3>{definition}</h3>
                    <p>{example === undefined ? "" : `"${example}"`}</p>

                    {antonyms.length !== 0 && (
                        <div>
                            <span>Synonyms:</span>
                            <ul>
                                {synonyms.map((synonym, synonymIndex) => (
                                    <li key={synonymIndex}>{synonym}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {antonyms.length !== 0 && (
                        <div>
                            <span>Antonyms:</span>
                            <ul>
                                {antonyms.map((antonym, antonymIndex) => (
                                    <li key={antonymIndex}>{antonym}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>
            )
        )}
    </ol>
);

interface ListOfMeaningsProps {
    meanings: Meaning[];
}

const ListOfMeanings = ({ meanings }: ListOfMeaningsProps) => (
    <ul className="flex flex-col gap-4">
        {meanings.map((meaning, meaningIndex) => (
            <li key={meaningIndex} className="">
                <h2>{meaning.partOfSpeech}</h2>
                <ListOfDefinitions definitions={meaning.definitions} />
            </li>
        ))}
    </ul>
);

export default ListOfMeanings;
