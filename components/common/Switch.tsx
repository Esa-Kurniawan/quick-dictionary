import { Fragment } from "react";

import { Switch as HeadlessSwitch } from "@headlessui/react";

interface SwitchProps {
    onChange: () => void;
    enabled: boolean;
}

const Switch = ({ onChange, enabled }: SwitchProps) => {
    return (
        <HeadlessSwitch checked={enabled} onChange={onChange} as={Fragment}>
            {({ checked }) => (
                <button
                    className={`${
                        checked ? "bg-blue" : "bg-gray-500 dark:bg-gray-400"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                    <span className="sr-only">Enable dark mode</span>
                    <span
                        className={`${
                            checked ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-blue transition`}
                    />
                </button>
            )}
        </HeadlessSwitch>
    );
};

export default Switch;
