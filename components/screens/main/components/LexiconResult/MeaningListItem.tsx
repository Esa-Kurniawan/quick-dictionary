import { Definition, Meaning } from "types";

const ListOfDefinitions = ({ definitions }: { definitions: Definition[] }) => (
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

const MeaningListItem = ({ meaning }: { meaning: Meaning }) => (
    <li className="">
        <h2>{meaning.partOfSpeech}</h2>
        <ListOfDefinitions definitions={meaning.definitions} />
    </li>
);

export default MeaningListItem;
