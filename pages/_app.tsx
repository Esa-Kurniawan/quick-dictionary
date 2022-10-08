import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import { IconContext } from "react-icons";
import "styles/globals.css";
import { NextPageWithLayout } from "types";

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const [queryClient] = useState(() => new QueryClient());

    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class">
                <IconContext.Provider
                    value={{
                        size: "24px",
                    }}
                >
                    {getLayout(<Component {...pageProps} />)}
                    <ReactQueryDevtools initialIsOpen={false} />
                </IconContext.Provider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
