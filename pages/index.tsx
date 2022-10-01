import { NextPage } from "next";
import Head from "next/head";

import Dictionary from "components/screens/dictionary";

const DictionaryPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Open Dictionary</title>
            </Head>

            <Dictionary />
        </>
    );
};

export default DictionaryPage;
