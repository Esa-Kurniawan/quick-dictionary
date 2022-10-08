import Head from "next/head";
import { ReactElement } from "react";

import { NextPageWithLayout } from "types";

import DictionaryScreen from "components/screens/dictionary";
import DictionaryLayout from "components/screens/dictionary/components/DictionaryLayout";

const DictionaryPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Quick Dictionary</title>
            </Head>

            <DictionaryScreen />
        </>
    );
};

DictionaryPage.getLayout = function getLayout(page: ReactElement) {
    return <DictionaryLayout>{page}</DictionaryLayout>;
};

export default DictionaryPage;
