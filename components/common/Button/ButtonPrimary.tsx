import clsx from "clsx";
import { motion } from "framer-motion";

interface ButtonPrimaryProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    text: string;
    type?: "button" | "submit" | "reset";
    disable?: boolean;
    width?: "fit-content" | "full";
}

const ButtonPrimary = ({
    text,
    disable,
    onClick,
    type = "button",
    width,
}: ButtonPrimaryProps) => {
    return (
        <>
            <motion.button
                type={type}
                onClick={onClick}
                className={clsx(
                    "sm-padding select-none hover-transition hover:bg-dark-blue active:scale-90 rounded-md bg-blue text-sm font-semibold text-slate-300",
                    {
                        "cursor-not-allowed opacity-50": disable,
                        "w-full": width === "full",
                    }
                )}
            >
                {text}
            </motion.button>
        </>
    );
};

export default ButtonPrimary;
