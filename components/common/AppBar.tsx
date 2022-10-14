import { ReactHTML, useState } from "react";

import useTheme, { Theme } from "lib/useTheme";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import { IconButton } from "components/common/Button";

import Tooltip from "./Tooltip";

interface AppBarProps {
    leftColumnButton: React.ReactElement;
    pageName: string;
    rightColumn?: React.ReactNode;
    pageNameAs?: keyof ReactHTML;
}

const AppBar = ({
    leftColumnButton,
    pageName,
    rightColumn,
    pageNameAs,
}: AppBarProps) => {
    const { isMounted, isLightTheme, toggleTheme } = useTheme();

    const PageNameAs = pageNameAs ?? "div";

    if (!isMounted) return null;

    return (
        <header className="fixed top-0 inset-x-0 shadow-md sm-padding md:md-padding bg-gray-100 dark:bg-gray-800 z-40 lg:lg-padding">
            <div className="flex justify-between items-center">
                <div className="flex justify-between gap-x-3 items-center">
                    {leftColumnButton}
                    <PageNameAs className="text-xl">{pageName}</PageNameAs>
                </div>

                <div>
                    {rightColumn}
                    {isLightTheme ? (
                        <Tooltip title="Enable dark mode">
                            <IconButton onClick={() => toggleTheme(Theme.DARK)}>
                                <MdOutlineDarkMode />
                            </IconButton>
                        </Tooltip>
                    ) : (
                        <Tooltip title="Enable light mode">
                            <IconButton
                                onClick={() => toggleTheme(Theme.LIGHT)}
                            >
                                <MdOutlineLightMode />
                            </IconButton>
                        </Tooltip>
                    )}
                </div>
            </div>
        </header>
    );
};

export default AppBar;
