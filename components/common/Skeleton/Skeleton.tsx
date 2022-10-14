import ReactSkeleton, { SkeletonProps } from "react-loading-skeleton";

const Skeleton = (props: SkeletonProps) => {
    return (
        <ReactSkeleton
            containerClassName="display:block;line-height:1;"
            {...props}
        />
    );
};

export default Skeleton;
