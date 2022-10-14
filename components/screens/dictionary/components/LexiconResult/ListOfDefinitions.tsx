import { Definition } from "../../types";

interface ListOfDefinitionsProps {
    definitions: Definition[];
}

const ListOfDefinitions = ({ definitions }: ListOfDefinitionsProps) => (
    <ol className="space-y-3 mt-2 list-decimal">
        {definitions.map((definition, definitionIndex) => (
            <li
                className="bg-gray-200/50 dark:bg-gray-700/50 sm-padding rounded-lg"
                key={definitionIndex}
            >
                <h3>{definition.definition}</h3>
                {definition.hasOwnProperty("example") && (
                    <p className="">{`"${definition.example}"`}</p>
                )}
            </li>
        ))}
    </ol>
);

export default ListOfDefinitions;
