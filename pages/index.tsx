import { NextPage } from "next";
import Head from "next/head";

import Main from "components/screens/main";

const MainPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Main />
        </>
    );
};

export default MainPage;
