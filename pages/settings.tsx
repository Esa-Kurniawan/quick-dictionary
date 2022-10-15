import { NextPage } from "next";
import Head from "next/head";

import AppBar from "components/common/AppBar";

const SettingsPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Settings - QuickDictionary</title>
                <meta
                    name="description"
                    content="change default settings of QuickDictionary"
                />
            </Head>
            <AppBar pageName="Hello" leftColumnButton={<div>oke</div>} />
            <div>no settings aviliable yet</div>;
        </>
    );
};

export default SettingsPage;
