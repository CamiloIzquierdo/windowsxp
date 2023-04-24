export const FilesStartModal = ({
    image,
    firstText,
    secondText,
    imageSize = "primary",
    onClick = () => {},
}) => {
    const imgSize = {
        primary: {
            size: "w-8 h-8",
        },
        secondary: {
            size: "w-7 h-7",
        },
        tertiary: {
            size: "w-6 h-6",
        },
    };

    return (
        <div
            className="flex gap-[4px] items-center justify-start px-2 hover:bg-blue-600 w-full cursor-default"
            onClick={() => onClick()}
        >
            <img src={image} alt="" className={imgSize[imageSize].size} />
            <div className="flex flex-col">
                <span className="font-bold text-sm">{firstText}</span>
                <span className="text-xs">{secondText}</span>
            </div>
        </div>
    );
};
