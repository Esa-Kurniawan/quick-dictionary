import { useRouter } from "next/router";
import React from "react";

import clsx from "clsx";
import { Variants, motion } from "framer-motion";

export interface SidebarListItem {
    id: number;
    label: string;
    icon: React.ReactElement;
    pathname: string;
}

const listItemVariants: Variants = {
    closed: {
        x: "-50%",
        opacity: 0,
        transition: {
            x: { stiffness: 1000 },
        },
    },
    open: {
        x: 0,
        opacity: 1,
        transition: {
            x: { stiffness: 1000, velocity: -100 },
        },
    },
};

const sidebarListVariants: Variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
            staggerDirection: 1,
        },
    },
};

interface SidebarList {
    sidebarList: any[];
}

const SidebarList = ({ sidebarList }: SidebarList) => {
    const router = useRouter();

    return (
        <div>
            <motion.ul variants={sidebarListVariants}>
                {sidebarList.map((sidebarListItem: SidebarListItem) => (
                    <motion.li
                        key={sidebarListItem.id}
                        variants={listItemVariants}
                        onClick={() => router.push(sidebarListItem.pathname)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }}
                        className={clsx(
                            "md-padding flex cursor-pointer items-center gap-2",
                            {
                                "bg-slate-800":
                                    sidebarListItem.pathname ===
                                    router.pathname,
                            }
                        )}
                    >
                        {sidebarListItem.icon}
                        <span className="text-sm font-semibold text-slate-400">
                            {sidebarListItem.label}
                        </span>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
};

export default SidebarList;
