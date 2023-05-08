import { useContext, useEffect, useState } from "react";
import { View } from "./View";
import { GlobalContext } from "../../context/GlobalContext";

export const Game = () => {
    const [easy, setEasy] = useState(false);
    const [intermediate, setIntermediate] = useState(false);
    const [expert, setExpert] = useState(false);

    const { level, setLevel } = useContext(GlobalContext);
    const [selectedLevel, setSelectedLevel] = useState("");

    useEffect(() => {
        if (easy) {
            setSelectedLevel("easy");
        } else if (intermediate) {
            setSelectedLevel("medium");
        } else if (expert) {
            setSelectedLevel("hard");
        } else {
            setSelectedLevel("");
        }
    }, [easy, intermediate, expert]);

    useEffect(() => {
        if (selectedLevel !== "") {
            setLevel(selectedLevel);
        }
    }, [selectedLevel, setLevel]);

    return (
        <div className="h-20 w-28 bg-white flex flex-col text-xs cursor-default gap-[1px]">
            <span className="hover:bg-blue-600 pl-2">New</span>
            <div className="w-full bg-gray-300 h-[1px] my-[1px]"></div>
            <span
                className="hover:bg-blue-600 pl-2"
                onClick={() => {
                    setEasy(true);
                    setIntermediate(false);
                    setExpert(false);
                }}
            >
                Easy
            </span>
            <span
                className="hover:bg-blue-600 pl-2"
                onClick={() => {
                    setEasy(false);
                    setIntermediate(true);
                    setExpert(false);
                }}
            >
                Intermediate
            </span>
            <span
                className="hover:bg-blue-600 pl-2"
                onClick={() => {
                    setEasy(false);
                    setIntermediate(false);
                    setExpert(true);
                }}
            >
                Expert
            </span>
        </div>
    );
};
