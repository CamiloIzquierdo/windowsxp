export const Button = ({ children, color, selected, onClick = () => {} }) => {
    const buttonType = {
        primary: "bg-green-500 rounded-r-lg font-bold italic justify-center",
        secondary: `${
            selected ? "bg-blue-800" : "bg-blue-500"
        } rounded-sm w-full max-w-[180px] text-sm justify-start px-4`,
        tertiary: `${
            selected ? "bg-blue-800" : "bg-blue-500"
        } rounded-sm w-full max-w-[180px] text-sm justify-start`,
    };

    return (
        <button
            className={`${buttonType[color]} h-full px-2 py-1 text-white shadow-2xl flex gap-1 items-center `}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
};
