import { Sense } from "../../types";

interface ListOfSensesProps {
    senses: Sense[];
}

const ListOfSenses = ({ senses }: ListOfSensesProps) => (
    <ol className="pl-12 flex flex-col gap-2 mt-2 list-decimal">
        {senses.map((sense) => (
            <li key={sense.id}>
                <div>
                    <h3>{sense.definitions[0]}</h3>
                    <ul className="mt-1 space-y-1">
                        {sense.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex}>{`"${example.text}"`}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-1">
                    {sense.hasOwnProperty("synonyms") && (
                        <div className="flex">
                            <span className="font-mono italic">Synonyms:</span>
                            <ul className="flex gap-x-2 overflow-x-auto">
                                {sense.synonyms.map((synonym, synonymIndex) => (
                                    <li
                                        className="px-3 whitespace-nowrap rounded-full bg-gray-200 dark:bg-gray-700"
                                        key={synonymIndex}
                                    >
                                        {synonym.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* {sense.hasOwnProperty("antonyms") && (
                        <div>
                            <span>Antonyms:</span>
                            <ul>
                                {sense.antonyms.map((antonym, antonymIndex) => (
                                    <li key={antonymIndex}>{antonym}</li>
                                ))}
                            </ul>
                        </div>
                    )} */}
                </div>
            </li>
        ))}
    </ol>
);

export default ListOfSenses;
