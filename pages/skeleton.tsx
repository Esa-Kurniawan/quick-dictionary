import { NextPage } from "next";
import Head from "next/head";

import LexiconSkeleton from "components/screens/dictionary/components/LexiconSkeleton";

const SkeletonPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Skeleton playground</title>
            </Head>

            <LexiconSkeleton />
        </>
    );
};

export default SkeletonPage;
