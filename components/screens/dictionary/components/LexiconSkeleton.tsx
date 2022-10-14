import { motion } from "framer-motion";
import { fadeMotions } from "lib/fadeMotions";
import { Theme } from "lib/useTheme";
import { useTheme } from "next-themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useMountedState } from "react-use";

import SkeletonTheme from "components/common/Skeleton/SkeletonTheme";

interface MeaningSkeletonProps {
    count: number;
}

const MeaningSkeleton = ({ count }: MeaningSkeletonProps) => {
    const meaningsSkeletonCount = Array(count).fill(0);
    const synonymsSkeletonCount = Array(5).fill(0);

    return (
        <>
            {meaningsSkeletonCount.map((_, index) => (
                <div className="mt-4" key={index}>
                    <Skeleton width={45} />
                    <div className="pl-12 mt-2">
                        <Skeleton
                            style={{ marginBottom: ".375rem" }}
                            height={40}
                            count={5}
                        />
                        <div className="flex gap-x-3">
                            <div>
                                <Skeleton width={70} />
                            </div>
                            <div className="flex gap-x-2 overflow-hidden">
                                {synonymsSkeletonCount.map((_, index) => (
                                    <div key={index}>
                                        <Skeleton
                                            style={{ borderRadius: "30px" }}
                                            width={100}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

const LexiconSkeleton = () => {
    return (
        <SkeletonTheme>
            <motion.div {...fadeMotions} className="mt-8">
                <div className="flex gap-x-2 items-center">
                    <div className="">
                        <Skeleton width={40} height={40} circle />
                    </div>
                    <div className="grow">
                        <Skeleton height={30} width={150} />
                        <Skeleton height={15} width={60} />
                    </div>
                </div>

                <MeaningSkeleton count={3} />

                <span className="sr-only">Loading...</span>
            </motion.div>
        </SkeletonTheme>
    );
};

export default LexiconSkeleton;
