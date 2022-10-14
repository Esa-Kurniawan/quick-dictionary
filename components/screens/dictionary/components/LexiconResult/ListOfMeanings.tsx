import { Meaning } from "../../types";
import ListOfDefinitions from "./ListOfDefinitions";

interface AntonymsOrSynonymsListProps {
    list: string[];
    title: string;
}

const AntonymsOrSynonymsList = ({
    list,
    title,
}: AntonymsOrSynonymsListProps) => {
    if (list.length === 0) return null;

    return (
        <div className="flex mt-3">
            <div className="font-mono italic">{title}</div>
            <ul className="flex gap-x-2 overflow-x-auto">
                {list.map((antonymOrsynonym, index) => (
                    <li
                        className="px-3 whitespace-nowrap rounded-full bg-gray-200/50 dark:bg-gray-700/50"
                        key={index}
                    >
                        {antonymOrsynonym}
                    </li>
                ))}
            </ul>
        </div>
    );
};

interface ListOfMeaningsProps {
    meanings: Meaning[];
}

const ListOfMeanings = ({ meanings }: ListOfMeaningsProps) => (
    <ul className="space-y-4 mt-2">
        {meanings.map((meaning, meaningIndex) => (
            <li key={meaningIndex} className="">
                <h2 className="font-mono italic">{meaning.partOfSpeech}</h2>

                <div className="pl-12">
                    <ListOfDefinitions definitions={meaning.definitions} />

                    <AntonymsOrSynonymsList
                        list={meaning.antonyms}
                        title="Similiar:"
                    />

                    <AntonymsOrSynonymsList
                        list={meaning.synonyms}
                        title="Opposite:"
                    />
                </div>
            </li>
        ))}
    </ul>
);

export default ListOfMeanings;
