import { Definition } from "../../types";

interface ListOfDefinitionsProps {
    definitions: Definition[];
}

const ListOfDefinitions = ({ definitions }: ListOfDefinitionsProps) => (
    <ol className="pl-12 flex flex-col gap-2 mt-2 list-decimal">
        {definitions.map((definition, definitionIndex) => {
            if (definition.hasOwnProperty("example"))
                return (
                    <li key={definitionIndex}>
                        <h3>{definition.definition}</h3>
                        <p className="">{`"${definition.example}"`}</p>
                    </li>
                );
        })}
    </ol>
);

export default ListOfDefinitions;
