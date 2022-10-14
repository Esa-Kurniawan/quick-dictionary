import { useTheme as useNextTheme } from "next-themes";
import { useMountedState } from "react-use";

export enum Theme {
    DARK = "dark",
    LIGHT = "light",
}

const useTheme = () => {
    const { resolvedTheme, setTheme } = useNextTheme();
    const isMounted = useMountedState();
    const isLightTheme = resolvedTheme === Theme.LIGHT;
    const toggleTheme = (theme?: Theme) => {
        if (theme === undefined) {
            setTheme(isLightTheme ? Theme.DARK : Theme.LIGHT);
        } else {
            setTheme(theme);
        }
    };

    return { isLightTheme, isMounted, toggleTheme };
};

export default useTheme;
