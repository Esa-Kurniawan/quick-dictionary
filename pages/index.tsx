import { NextPage } from "next";
import Head from "next/head";

import Dictionary from "components/screens/dictionary";

const DictionaryPage: NextPage = () => {
    console.log(process.env.NEXT_PUBLIC_DICTIONARY_API_BASE_URL);

    return (
        <>
            <Head>
                <title>Quick Dictionary</title>
            </Head>

            <Dictionary />
        </>
    );
};

export default DictionaryPage;
