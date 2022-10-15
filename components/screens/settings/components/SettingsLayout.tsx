import { useRouter } from "next/router";
import { ReactElement } from "react";

import { MdOutlineArrowBack } from "react-icons/md";

import AppBar from "components/common/AppBar";
import { IconButton } from "components/common/Button";
import Tooltip from "components/common/Tooltip";

interface SettingsLayoutProps {
    children: ReactElement;
}

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
    const router = useRouter();

    return (
        <>
            <AppBar
                pageName="Settings"
                leftColumnButton={
                    <Tooltip title="Back to home page">
                        <IconButton onClick={() => router.push("/")}>
                            <MdOutlineArrowBack />
                        </IconButton>
                    </Tooltip>
                }
            />

            <main className="mt-24">{children}</main>
        </>
    );
};

export default SettingsLayout;
