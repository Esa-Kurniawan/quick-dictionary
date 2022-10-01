import React from "react";

import { AnimatePresence, Variants, motion } from "framer-motion";
import {
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoInstagram,
    IoLogoLinkedin,
} from "react-icons/io5";
import {
    MdOutlineDelete,
    MdOutlineFeedback,
    MdOutlineNotes,
    MdOutlineSettings,
} from "react-icons/md";

import { Dialog } from "@headlessui/react";

import SidebarList, { SidebarListItem } from "./SidebarList";

interface IconLinkProps {
    href: string;
    children: React.ReactElement;
}

const IconLink = ({ href, children }: IconLinkProps) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            href={href}
            className="rounded-full hover-transition hover:bg-slate-800 active:scale-75 py-2 px-2"
        >
            {children}
        </a>
    );
};

const sidebarList: SidebarListItem[] = [
    {
        id: 0,
        label: "Settings",
        icon: <MdOutlineSettings size={18} />,
        pathname: "/settings",
    },
];

const sidebarVariants: Variants = {
    closed: {
        opacity: 0,
        x: "-100%",
        transition: {
            stiffness: 100,
        },
    },
    open: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.3,
            stiffness: 100,
        },
    },
};

const modalOverlayVariants: Variants = {
    closed: {
        opacity: 0,
        transition: {
            delay: 0.3,
        },
    },
    open: {
        opacity: 1,
    },
};

const Sidebar = ({ onClose, open }: { onClose: () => void; open: boolean }) => {
    return (
        <AnimatePresence>
            {open && (
                <Dialog
                    as={motion.div}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    open={open}
                    className="relative z-40"
                    onClose={onClose}
                    static
                >
                    <motion.div
                        variants={modalOverlayVariants}
                        className="fixed inset-0 backdrop-blur"
                    />

                    <div className="fixed inset-0 overflow-hidden">
                        <Dialog.Panel
                            as={motion.div}
                            variants={sidebarVariants}
                            className="relative h-full w-72 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-800 shadow-md"
                        >
                            <header className="grid place-items-center aspect-square">
                                {/* TODO put user account here, and when user click this avatar redirect them to their account page */}
                            </header>

                            <SidebarList sidebarList={sidebarList} />

                            <footer className="absolute py-2 bottom-0 inset-x-0 border-t border-solid border-gray-200 dark:border-gray-700">
                                <div className="flex flex-wrap justify-center ">
                                    <IconLink href="https://github.com/Esa-Kurniawan">
                                        <IoLogoGithub
                                            size={18}
                                            className="text-[#333] dark:text-[#f5f5f5]"
                                        />
                                    </IconLink>
                                    <IconLink href="">
                                        <IoLogoLinkedin
                                            size={18}
                                            className="text-[#0A66C2]"
                                        />
                                    </IconLink>
                                    <IconLink href="">
                                        <IoLogoInstagram
                                            size={18}
                                            className="text-[#fb3958]"
                                        />
                                    </IconLink>
                                    <IconLink href="">
                                        <IoLogoFacebook
                                            size={18}
                                            className="text-[#4267B2]"
                                        />
                                    </IconLink>
                                </div>
                            </footer>
                        </Dialog.Panel>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
