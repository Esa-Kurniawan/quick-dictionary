import { LexicalEntry } from "../../types";
import ListOfSenses from "./ListOfSenses";

interface ListOfMeaningsProps {
    lexicalEntries: LexicalEntry[];
}

const ListOfMeanings = ({ lexicalEntries }: ListOfMeaningsProps) => (
    <ul className="flex flex-col gap-4 mt-4">
        {lexicalEntries.map((lexicalEntry, lexicalEntryIndex) => (
            <li key={lexicalEntryIndex} className="">
                <h2 className="font-mono italic">
                    {lexicalEntry.lexicalCategory.text}
                </h2>
                <ListOfSenses senses={lexicalEntry.entries[0].senses} />
            </li>
        ))}
    </ul>
);

export default ListOfMeanings;
