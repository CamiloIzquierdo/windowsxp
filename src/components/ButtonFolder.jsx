import { FaRegWindowRestore } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdMinimize } from "react-icons/md";
import { GlobalContext } from "../context/GlobalContext";
import { useContext, useMemo, useState } from "react";

export const ButtonFolder = ({ data, setIsMinimized, isMinimized }) => {
    const { modal, setModal, folders, setFolders, setExplore } =
        useContext(GlobalContext);

    const closeModal = () => {
        if (folders) {
            const newItems = folders.filter((folder) => folder.id !== data.id);
            setFolders(newItems);
            setModal(false);
        }
    };

    const minimizeModal = (id) => {
        folders.find((item) =>
            item.id === id ? (item.selected = !item.selected) : ""
        );
        setModal(false);
    };

    return (
        <div className="flex justify-center gap-[2px] items-center px-1">
            <button
                onClick={() => minimizeModal(data.id)}
                className="border text-white border-white w-6 items-center justify-center flex h-6 rounded-md bg-gradient-to-r from-blue-500 to-blue-600"
            >
                <MdMinimize className=" text-white  " />
            </button>
            <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="border text-white border-white w-6 items-center justify-center flex h-6 rounded-md bg-gradient-to-r from-blue-500 to-blue-600"
            >
                <FaRegWindowRestore className=" text-white " />
            </button>
            <button
                onClick={() => closeModal()}
                className="border text-white border-white w-6 items-center justify-center flex h-6 rounded-md bg-gradient-to-r from-red-500 to-red-600"
            >
                <AiOutlineClose className=" text-white text-xl " />
            </button>
        </div>
    );
};
