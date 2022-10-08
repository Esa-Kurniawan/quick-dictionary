import { ChangeEventHandler } from "react";

import { MdOutlineSearch } from "react-icons/md";

interface SearchInputProps {
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput = ({ onChange }: SearchInputProps) => {
    return (
        <div className="relative">
            <input
                className="md-padding w-full border-b focus:border-b-2 placeholder:text-gray-500 rounded-md outline-none focus:border-light-blue dark:focus:border-blue border-gray-300 bg-gray-200 dark:border-gray-600 dark:bg-gray-700 font-regular transition-colors delay-75 duration-150 ease-in-out focus:ring-0 focus:ring-offset-0"
                type="text"
                onChange={onChange}
                placeholder="Search word"
            />
            <button className="absolute top-0 right-0 inset-y-0 aspect-square grid place-items-center">
                <MdOutlineSearch size={18} />
            </button>
        </div>
    );
};

export default SearchInput;
