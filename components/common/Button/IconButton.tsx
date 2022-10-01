interface IconButtonProps {
    onClick: () => void;
    children: React.ReactElement;
}

const IconButton = ({ onClick, children }: IconButtonProps) => {
    return (
        <button
            className="p-2 active:scale-90 rounded-full hover-transition hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default IconButton;
