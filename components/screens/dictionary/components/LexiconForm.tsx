import { ChangeEventHandler, FormEventHandler } from "react";

import ButtonPrimary from "components/common/Button/ButtonPrimary";
import SearchInput from "components/screens/dictionary/components/SearchInput";

interface LexiconFormProps {
    onSubmit: FormEventHandler<HTMLFormElement>;
    onChangeWordInput: ChangeEventHandler<HTMLInputElement>;
}

const LexiconForm = ({ onSubmit, onChangeWordInput }: LexiconFormProps) => {
    return (
        <form className="" onSubmit={onSubmit}>
            <SearchInput onChange={onChangeWordInput} />
        </form>
    );
};

export default LexiconForm;
