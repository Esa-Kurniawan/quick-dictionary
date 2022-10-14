import { ChangeEventHandler, FormEvent } from "react";

import SearchInput from "components/screens/dictionary/components/SearchInput";

interface LexiconFormProps {
    onSubmit: () => void;
    onInputChange: ChangeEventHandler<HTMLInputElement>;
}

const LexiconForm = ({ onSubmit, onInputChange }: LexiconFormProps) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <SearchInput onChange={onInputChange} />
        </form>
    );
};

export default LexiconForm;
