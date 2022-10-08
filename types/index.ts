import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export enum Theme {
    DARK = "dark",
    LIGHT = "light",
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};
