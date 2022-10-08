import { ReactNode } from "react";

import { MdOutlineMenu } from "react-icons/md";
import { useToggle } from "react-use";

import AppBar from "components/common/AppBar";
import { IconButton } from "components/common/Button";
import Sidebar from "components/common/Sidebar";
import Tooltip from "components/common/Tooltip";

interface DictionaryLayoutProps {
    children: ReactNode;
}

const DictionaryLayout = ({ children }: DictionaryLayoutProps) => {
    const [isSidebarOpen, toggleSidebarOpen] = useToggle(false);
    return (
        <>
            <AppBar
                leftSideButton={
                    <Tooltip title="Open sidebar">
                        <IconButton onClick={() => toggleSidebarOpen(true)}>
                            <MdOutlineMenu />
                        </IconButton>
                    </Tooltip>
                }
                pageName="Quick Dictionary"
            />

            <Sidebar
                open={isSidebarOpen}
                onClose={() => toggleSidebarOpen(false)}
            />

            <main className="mt-24">{children}</main>
        </>
    );
};

export default DictionaryLayout;
