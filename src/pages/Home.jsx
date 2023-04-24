import { useContext, useState } from "react";
import "../App.css";
import { Error } from "../components/Error";
import { File } from "../components/File";
import { FolderOpen } from "../components/FolderOpen";
import { InternetExplorer } from "../components/InternetExplorer";
import { Taskbar } from "../components/Taskbar";
import { GlobalContext } from "../context/GlobalContext";
import { Data } from "../data/data";
import { Bloc } from "../components/Bloc";

export const Home = () => {
    /* const [showModal, setShowModal] = useState(false); */
    const [isMinimized, setIsMinimized] = useState(true);
    const { folders, setFolders, modal, setModal, toggleError } =
        useContext(GlobalContext);

    const handleDoubleClick = (folderData) => {
        const exists = folders.some((item) => item.id === folderData.id);
        if (!exists) {
            const updatedFolders = [
                ...folders.map((item) => ({ ...item, selected: false })),
                { ...folderData, selected: true },
            ];
            setFolders(updatedFolders);
        } else {
            const updatedFolders = folders.map((item) =>
                item.id === folderData.id
                    ? { ...item, selected: true }
                    : { ...item, selected: false }
            );

            setFolders(updatedFolders);
        }

        setModal(!modal);
    };

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <div className="flex h-screen w-screen flex-col justify-between items-start relative">
            <div className="h-fit">
                <div className="flex">
                    <div>
                        {Data.map(
                            (folderData) =>
                                folderData.category === "folder" && (
                                    <div
                                        key={folderData.id}
                                        className="flex flex-col items-start px-5 "
                                    >
                                        <File
                                            onDoubleClick={() =>
                                                handleDoubleClick(folderData)
                                            }
                                        >
                                            {folderData.names}
                                        </File>
                                    </div>
                                )
                        )}
                    </div>
                </div>
                <div
                    className={`${
                        modal ? "block" : "hidden"
                    } fixed z-10 inset-0 overflow-y-auto`}
                >
                    <div className="flex items-center justify-center min-h-full">
                        <div
                            className="fixed inset-0 bg-opacity-75 transition-opacity"
                            aria-hidden="true"
                            onClick={toggleModal}
                        ></div>
                        <div
                            className={`bg-white rounded-lg z-10 ${
                                !isMinimized
                                    ? "w-[1000px] h-[600px]"
                                    : "w-screen h-screen"
                            }`}
                        >
                            {folders?.map((item) =>
                                item.selected &&
                                item.typeFolder === "explorer" ? (
                                    <InternetExplorer
                                        isMinimized={isMinimized}
                                        setIsMinimized={setIsMinimized}
                                        url={item.url}
                                    />
                                ) : item.selected &&
                                  item.typeFolder === "folderDesktop" ? (
                                    <FolderOpen
                                        isMinimized={isMinimized}
                                        setIsMinimized={setIsMinimized}
                                    />
                                ) : item.selected &&
                                  item.typeFolder === "cv" ? (
                                    <Bloc
                                        isMinimized={isMinimized}
                                        setIsMinimized={setIsMinimized}
                                    />
                                ) : null
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Taskbar />
            {toggleError && (
                <div className="absolute flex justify-center h-full items-center w-full">
                    <Error />
                </div>
            )}
        </div>
    );
};
