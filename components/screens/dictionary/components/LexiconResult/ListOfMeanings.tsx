import { Meaning } from "../../types";
import ListOfDefinitions from "./ListOfDefinitions";

interface ListOfMeaningsProps {
    meanings: Meaning[];
}

const ListOfMeanings = ({ meanings }: ListOfMeaningsProps) => (
    <ul className="flex flex-col gap-4 mt-4">
        {meanings.map((meaning, meaningIndex) => (
            <li key={meaningIndex} className="">
                <h2 className="font-mono italic">{meaning.partOfSpeech}</h2>

                <ListOfDefinitions definitions={meaning.definitions} />

                {meaning.synonyms.length > 0 && (
                    <div className="flex mt-1">
                        <span className="font-mono italic">Synonyms:</span>
                        <ul className="flex gap-x-2 overflow-x-auto">
                            {meaning.synonyms.map((synonym, synonymIndex) => (
                                <li
                                    className="px-3 whitespace-nowrap rounded-full bg-gray-200 dark:bg-gray-700"
                                    key={synonymIndex}
                                >
                                    {synonym}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* {sense.hasOwnProperty("antonyms") && (
                        <div className='mt-1'>
                            <span>Antonyms:</span>
                            <ul>
                                {sense.antonyms.map((antonym, antonymIndex) => (
                                    <li key={antonymIndex}>{antonym}</li>
                                ))}
                            </ul>
                        </div>
                    )} */}
            </li>
        ))}
    </ul>
);

export default ListOfMeanings;
