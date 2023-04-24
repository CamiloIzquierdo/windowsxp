import { useContext, useMemo } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
    BsChevronDown,
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import * as Images from "../../public/img/Index";
import windowsIcon from "../../public/img/start-icon.png";
import { GlobalContext } from "../context/GlobalContext";
import { ButtonFolder } from "./ButtonFolder";

export const InternetExplorer = ({
    checkSelectedFolder,
    setIsMinimized,
    isMinimized,
    url,
}) => {
    const { folders } = useContext(GlobalContext);

    const checkSelectedFolder2 = useMemo(() => {
        return folders.find((item) => item.selected);
    });
    const liStyle =
        "hover:bg-blue-400 cursor-default px-2 h-full flex items-center";
    const imgHover =
        "border-transparent border hover:border-gray-400 rounded-sm";

    return (
        <div className="w-full h-full flex flex-col">
            <div className="bg-blue-600 h-8 shadow-xl items-center flex gap-3 cursor-default justify-between">
                <div className="flex gap-2 px-3 items-center">
                    <img src={Images.Explorer} alt="" />
                    <span className="font-bold text-white text-sm">
                        Internet Explorer
                    </span>
                </div>
                <ButtonFolder
                    data={checkSelectedFolder2}
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
                <div className="border-r flex pr-1">
                    <img src={Images.Stop} alt="" className={imgHover} />
                    <img src={Images.Refresh} alt="" className={imgHover} />
                    <img src={Images.Home} alt="" className={imgHover} />
                </div>
                <div className="border-r flex gap-1 items-center pr-2">
                    <div
                        className={`${imgHover} flex gap-1 items-center cursor-default px-1`}
                    >
                        <img src={Images.Search} alt="" />
                        <p>Search</p>
                    </div>
                    <div
                        className={`${imgHover} flex gap-1 items-center cursor-default px-1`}
                    >
                        <img src={Images.Favorite} alt="" />
                        <p>Favorites</p>
                    </div>
                </div>
                <img src={Images.History} alt="" className={imgHover} />
                <img src={Images.Mail} alt="" className={imgHover} />
                <img src={Images.Messenger} alt="" className={imgHover} />
            </div>
            <div className="bg-gray-100 h-8 items-center flex gap-3 cursor-default px-2 border border-gray-200">
                <p className="">Address</p>
                <p className="bg-white w-[85%] flex gap-2 items-center px-2">
                    {url}
                </p>
                <AiOutlineArrowRight className="bg-green-600 text-white text-xl" />
                <p className="items-center">Go</p>
            </div>
            <div className="flex-[80%] flex h-full bg-white">
                <iframe src={url} width="100%" height="100%"></iframe>
            </div>
        </div>
    );
};
