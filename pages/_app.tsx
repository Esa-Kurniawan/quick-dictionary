import type { AppProps } from "next/app";
import { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import { IconContext } from "react-icons";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class">
                <IconContext.Provider
                    value={{
                        size: "24px",
                    }}
                >
                    <Component {...pageProps} />
                    <ReactQueryDevtools initialIsOpen={false} />
                </IconContext.Provider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
