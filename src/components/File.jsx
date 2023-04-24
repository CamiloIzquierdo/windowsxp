import carpeta from "../../public/img/carpeta.png";

export const File = ({ children, onDoubleClick }) => {
    return (
        <div className="flex flex-col self-center items-center cursor-pointer">
            <img src={carpeta} className="w-14" onDoubleClick={onDoubleClick} />
            <p className="text-white text-sm">{children}</p>
        </div>
    );
};
