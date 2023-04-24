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

export const Bloc = ({
    checkSelectedFolder,
    setIsMinimized,
    isMinimized,
    url,
}) => {
    const { folders } = useContext(GlobalContext);

    const checkSelectedFolder3 = useMemo(() => {
        return folders.find((item) => item.selected);
    });
    const liStyle =
        "hover:bg-blue-400 cursor-default px-2 h-full flex items-center";
    const imgHover =
        "border-transparent border hover:border-gray-400 rounded-sm";

    return (
        <div className="w-full h-full flex flex-col border-[3px] rounded-md border-blue-500">
            <div className="bg-blue-600 h-8 shadow-xl items-center flex gap-3 cursor-default justify-between">
                <div className="flex gap-2 px-3 items-center">
                    <img src={Images.Wordpad} alt="" width={20} />
                    <span className="font-bold text-white text-sm">
                        Mis datos
                    </span>
                </div>
                <ButtonFolder
                    data={checkSelectedFolder3}
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
            </div>
            <div className="flex flex-col">
                <span>Nombre : Camilo Izquierdo</span>
                <span>Edad : 23 Años</span>
                <span>Ubicacion : Rosario, Santa Fe, Argentina.</span>
                <span>Experiencia : 2 Años</span>
                <span>Email : camiloi.dev@gmail.com</span>
                <span>Celular : 3416851002</span>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/camilo-izquierdo-99a660229/"
                >
                    <span>Linkedin : Camilo Izquierdo</span>
                </a>
                <a target="_blank" href="https://github.com/CamiloIzquierdo">
                    <span>Github : Camilo Izquierdo</span>
                </a>
            </div>
        </div>
    );
};
