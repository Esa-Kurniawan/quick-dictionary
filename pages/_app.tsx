import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";
import { IconContext } from "react-icons";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <IconContext.Provider
                value={{
                    size: "24px",
                }}
            >
                <Component {...pageProps} />
            </IconContext.Provider>
        </ThemeProvider>
    );
}

export default MyApp;
