import { forwardRef } from "react";

interface IconButtonProps {
    onClick: () => void;
    children: React.ReactElement;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ onClick, children }, ref) => {
        return (
            <button
                ref={ref}
                className="p-2 active:scale-90 rounded-full hover-transition hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
                onClick={onClick}
            >
                {children}
            </button>
        );
    }
);

IconButton.displayName = "IconButton";

export default IconButton;
