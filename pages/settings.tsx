import { NextPage } from "next";

import AppBar from "components/common/AppBar";

const SettingsPage: NextPage = () => {
    return (
        <>
            <AppBar pageName="Hello" leftSideButton={<div>oke</div>} />
            <div>no settings aviliable yet</div>;
        </>
    );
};

export default SettingsPage;
