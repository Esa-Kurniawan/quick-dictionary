import React from "react";

import Tippy, { TippyProps } from "@tippyjs/react";
import "tippy.js/animations/scale.css";

interface TooltipProps {
    children: TippyProps["children"];
    title: string;
    placement?: TippyProps["placement"];
}

const Tooltip = ({ children, title, placement = "top" }: TooltipProps) => {
    return (
        <div className="w-fit h-fit">
            <Tippy
                placement={placement}
                interactive={true}
                animation="scale"
                delay={[500, 75]}
                touch={["hold", 500]}
                trigger="mouseenter"
                content={title}
                className="z-50 whitespace-nowrap rounded bg-neutral-100 dark:bg-neutral-900/80 py-1.5 px-2.5 font-sans text-xs font-medium text-slate-300 shadow-xl backdrop-blur-md"
            >
                {children}
            </Tippy>
        </div>
    );
};

export default Tooltip;
