import { MotionProps, Variants } from "framer-motion";

export const fadeVariants: Variants = {
    closed: {
        opacity: 0,
    },
    open: {
        opacity: 1,
    },
};

export const fadeMotions: MotionProps = {
    initial: "closed",
    animate: "open",
    exit: "closed",
    variants: fadeVariants,
};
