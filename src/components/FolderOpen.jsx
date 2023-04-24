import { useContext, useMemo } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
    BsChevronDown,
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FcOpenedFolder, FcSearch } from "react-icons/fc";
import windowsIcon from "../../public/img/start-icon.png";
import { GlobalContext } from "../context/GlobalContext";
import { ButtonFolder } from "./ButtonFolder";
import { LeftBoxFolder } from "./LeftBoxFolder";
import { FolderOpenMap } from "./FolderOpenMap";
export const FolderOpen = ({ setIsMinimized, isMinimized }) => {
    const liStyle =
        "hover:bg-blue-400 cursor-default px-2 h-full flex items-center";

    const { folders } = useContext(GlobalContext);

    const checkSelectedFolder = useMemo(() => {
        return folders.find((item) => item.selected);
    });

    return (
        <div className="w-full h-full flex flex-col border-[3px] rounded-md border-blue-500">
            <div className="bg-blue-600 h-8 shadow-xl items-center flex gap-3 cursor-default justify-between">
                <div className="flex gap-2 px-3">
                    <FcOpenedFolder className="text-xl" />
                    <span className="font-bold text-white text-sm">
                        {checkSelectedFolder?.names}
                    </span>
                </div>
                <ButtonFolder
                    data={checkSelectedFolder}
                    setIsMinimized={setIsMinimized}
                    isMinimized={isMinimized}
                />
            </div>
            <div className="bg-gray-100 items-center flex justify-between border h-fit">
                <ul className="flex gap-2 h-full ">
                    <li className={liStyle}>File</li>
                    <li className={liStyle}>Edit</li>
                    <li className={liStyle}>View</li>
                    <li className={liStyle}>Favorites</li>
                    <li className={liStyle}>Tools</li>
                    <li className={liStyle}>Help</li>
                </ul>
                <div className="bg-white px-3 py-2">
                    <img src={windowsIcon} alt="" width={15} />
                </div>
            </div>
            <div className="bg-gray-100 h-12 flex items-center gap-2 px-1 border">
                <BsFillArrowLeftCircleFill className="text-3xl text-gray-300 " />
                <div className="hover:bg-blue-500 hover:border-black flex items-center gap-2 cursor-default">
                    <p>Back</p>
                    <BsChevronDown className="text-sm" />
                </div>
                <BsFillArrowRightCircleFill className="text-3xl text-gray-300" />
                <FcOpenedFolder className="text-3xl hover:bg-blue-500 hover:border-black" />
                <div className="hover:bg-blue-500 hover:border-black flex items-center gap-2 cursor-default">
                    <FcSearch className="text-3xl" />
                    <p>Search</p>
                </div>
            </div>
            <div className="bg-gray-100 h-8 items-center flex gap-3 cursor-default px-2 border border-gray-200">
                <p className="">Address</p>
                <p className="bg-white w-[85%] flex gap-2 items-center px-2">
                    <FcOpenedFolder />
                    <span>{checkSelectedFolder?.names}</span>
                </p>
                <AiOutlineArrowRight className="bg-green-600 text-white text-xl" />
                <p className="items-center">Go</p>
            </div>
            <div className="flex h-full">
                <LeftBoxFolder />
                <div className="flex-[80%] flex bg-white p-5 gap-16">
                    <FolderOpenMap />
                </div>
            </div>
        </div>
    );
};
