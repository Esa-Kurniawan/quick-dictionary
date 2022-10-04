import { ChangeEventHandler, FormEvent, FormEventHandler } from "react";

import ButtonPrimary from "components/common/Button/ButtonPrimary";
import SearchInput from "components/screens/dictionary/components/SearchInput";

interface LexiconFormProps {
    onSubmit: () => void;
    onChangeWordInput: ChangeEventHandler<HTMLInputElement>;
}

const LexiconForm = ({ onSubmit, onChangeWordInput }: LexiconFormProps) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form className="" onSubmit={handleSubmit}>
            <SearchInput onChange={onChangeWordInput} />
        </form>
    );
};

export default LexiconForm;
