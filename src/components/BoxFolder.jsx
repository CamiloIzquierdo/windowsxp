import { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

export const BoxFolder = ({ children, title }) => {
    const [selected, setSelected] = useState(true);
    const headerBoxStyle =
        title === "Sobre mi"
            ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
            : "bg-gradient-to-r from-slate-100 to-slate-200 text-blue-900";
    return (
        <div className="w-full">
            <div
                className={`${headerBoxStyle} flex justify-between w-full items-center px-2 py-1 rounded-t-md`}
            >
                <span className="text-sm cursor-default font-semibold">
                    {title}
                </span>
                <span
                    className="cursor-pointer"
                    onClick={() => setSelected(!selected)}
                >
                    <BsChevronDoubleDown
                        className={`text-sm ${selected ? "rotate-180" : ""}`}
                    />
                </span>
            </div>
            {selected ? (
                <div className="bg-slate-200 flex flex-col text-xs gap-1 px-3 py-2 cursor-default transition-all delay-500">
                    {children}
                </div>
            ) : (
                ""
            )}
        </div>
    );
};
