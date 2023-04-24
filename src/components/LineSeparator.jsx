export const LineSeparator = ({
    color = "primary",
    size = "md",
    className = "",
}) => {
    const lineColor = {
        primary: "from-orange-400",
        secondary: "from-blue-300",
        tertiary: "from-gray-200",
    };

    const lineSize = {
        sm: "h-[1px] w-24",
        md: "h-[2px] w-24",
        lg: "h-[2px] w-full",
    };
    return (
        <div className={`h-fit w-full flex ${className}`}>
            <span
                className={`flex ${lineSize[size]} rounded-full bg-gradient-to-l ${lineColor[color]} to-transparent`}
            ></span>
            <span
                className={`flex ${lineSize[size]} rounded-full bg-gradient-to-r ${lineColor[color]} to-transparent -ml-[2px]`}
            ></span>
        </div>
    );
};
