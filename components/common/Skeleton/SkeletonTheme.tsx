import useTheme from "lib/useTheme";
import {
    SkeletonTheme as ReactSkeletonTheme,
    SkeletonThemeProps,
} from "react-loading-skeleton";

const SkeletonTheme = (props: SkeletonThemeProps) => {
    const { isLightTheme, isMounted } = useTheme();

    if (!isMounted) return null;

    return (
        <ReactSkeletonTheme
            baseColor={isLightTheme ? "#e5e7eb" : "#374151"}
            highlightColor={isLightTheme ? "#d1d5db" : "#475569"}
            {...props}
        >
            {props.children}
        </ReactSkeletonTheme>
    );
};

export default SkeletonTheme;
