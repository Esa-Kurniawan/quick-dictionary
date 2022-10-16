import Head from "next/head";
import { ReactElement } from "react";
import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
import { NextPageWithLayout } from "types";

import DictionaryScreen from "components/screens/dictionary";
import DictionaryLayout from "components/screens/dictionary/components/DictionaryLayout";

const DictionaryPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Quick Dictionary</title>
                <meta
                    name="description"
                    content="Search any word to find their meanings, pronunctions, definitions, etc"
                />
            </Head>

            <DictionaryScreen />
        </>
    );
};

DictionaryPage.getLayout = function getLayout(page: ReactElement) {
    return <DictionaryLayout>{page}</DictionaryLayout>;
};

export default DictionaryPage;
