import { useState } from "react";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useEffectOnce } from "react-use";
import { Theme } from "types";

import { IconButton } from "components/common/Button";

interface AppBarProps {
    leftSideButton: React.ReactElement;
    pageName: string;
    rightSide?: React.ReactNode;
}

const AppBar = ({ leftSideButton, pageName, rightSide }: AppBarProps) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffectOnce(() => {
        setMounted(true);
    });

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    };

    if (!mounted) return null;

    return (
        <header className="fixed top-0 inset-x-0 shadow-md sm-padding md:md-padding bg-gray-100 dark:bg-gray-800 z-40 lg:lg-padding">
            <div className="flex justify-between items-center">
                <div className="flex justify-between gap-x-3 items-center">
                    {leftSideButton}
                    <span className="text-xl">{pageName}</span>
                </div>

                <div>
                    {rightSide}
                    <IconButton onClick={toggleTheme}>
                        {theme === Theme.DARK ? (
                            <MdOutlineDarkMode />
                        ) : (
                            <MdOutlineLightMode />
                        )}
                    </IconButton>
                </div>
            </div>
        </header>
    );
};

export default AppBar;
