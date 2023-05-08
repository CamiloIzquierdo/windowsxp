import { useContext, useState } from "react";
import { View } from "./View";
import { GlobalContext } from "../../context/GlobalContext";

export const Buscaminas = () => {
    const [gameDrop, setGameDrop] = useState(true);
    const { level } = useContext(GlobalContext);

    return (
        <div
            className={`h-full relative w-48 justify-center items-center border-blue-500 border-2 rounded-t-md ${
                level === "easy"
                    ? "w-[200px]"
                    : level === "medium"
                    ? "w-[400px]"
                    : level === "hard"
                    ? "w-[600px]"
                    : ""
            }`}
        >
            <View />
        </div>
    );
};
