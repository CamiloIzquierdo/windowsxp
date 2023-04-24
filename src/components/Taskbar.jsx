import { useContext, useEffect, useState } from "react";
import { Button } from "./Button";
import { BiChevronLeft } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { GlobalContext } from "../context/GlobalContext";
import { StartOpen } from "./StartOpen";
import { useMediaQuery } from "@mui/material";

export const Taskbar = ({ onClick = () => {} }) => {
    const [toggleText, setToggleText] = useState(true);

    const { folders, setFolders, setModal, modal } = useContext(GlobalContext);

    const [time, setTime] = useState(new Date());

    const [toggleStart, setToggleStart] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const options = {
        hour: "numeric",
        minute: "numeric",
    };

    const closeAndOpen = () => {
        setModal(!modal);
    };

    const handleClick = (folderData) => {
        const updatedFolders = folders.map((folder) => {
            if (folder.id === folderData.id) {
                return { ...folder, selected: true };
            } else {
                return { ...folder, selected: false };
            }
        });
        setFolders(updatedFolders);
        setModal(true);
    };
    const isSmallScreen = useMediaQuery("(max-width:800px)");

    return (
        <div className="w-full bg-blue-600 h-9 flex justify-between items-center z-20 relative">
            {toggleStart && (
                <div className="h-full z-49 w-full absolute bottom-[536px]">
                    <StartOpen />
                </div>
            )}
            <div className="flex gap-3 h-full">
                <Button
                    color="primary"
                    onClick={() => setToggleStart(!toggleStart)}
                >
                    <img src="./img/start-icon.png" alt="" width={20} /> Start
                </Button>
                <div className="p-1 flex gap-2">
                    {folders.map((folder) => (
                        <div key={folder.id} className="md:w-36 w-fit">
                            <Button
                                color="secondary"
                                onClick={() => handleClick(folder)}
                                selected={folder.selected}
                            >
                                <img src={folder.icon} alt="" width={15} />
                                {isSmallScreen ? "" : folder.names}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center h-full relative">
                <span
                    className={`w-4 h-4 bg-blue-300 text-white rounded-full absolute -left-2 shadow-xl transition-all duration-300 cursor-pointer ${
                        toggleText ? "rotate-180" : ""
                    }`}
                    onClick={() => setToggleText(!toggleText)}
                >
                    <BiChevronLeft />
                </span>
                <div className="bg-blue-400 h-full flex items-center px-5 text-white text-sm shadow-l transition-all gap-2">
                    {toggleText ? (
                        <p className="text-xs font-medium flex gap-2 justify-center">
                            Mi Hora
                        </p>
                    ) : (
                        ""
                    )}
                    <span className="flex items-center justify-center gap-2">
                        <a
                            href="https://github.com/CamiloIzquierdo"
                            target="__blank"
                            className="cursor-pointer group relative"
                        >
                            <div className="hidden group-hover:flex absolute bg-white rounded-sm text-black -top-12 left-1 right-1 p-2 w-fit text-xs">
                                Ir a mi GitHub
                            </div>
                            <AiFillGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/camilo-izquierdo-99a660229/"
                            target="__blank"
                            className="cursor-pointer group relative"
                        >
                            <div className="hidden group-hover:flex absolute bg-white rounded-sm text-black -top-12 left-1 right-1 p-2 w-fit text-xs">
                                Ir a mi Linkedin
                            </div>
                            <GrLinkedinOption />
                        </a>

                        {time.toLocaleString("es-ES", options)}
                    </span>
                </div>
            </div>
        </div>
    );
};
