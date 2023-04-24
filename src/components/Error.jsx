import { AiOutlineClose } from "react-icons/ai";
import { ErrorC, ErrorMp3 } from "../../public/img/Index";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
export const Error = () => {
    const { setToggleError } = useContext(GlobalContext);

    return (
        <div className="w-[450px] h-fit items-center justify-center rounded-t-md border-2 z-20 border-blue-700">
            <div className="bg-blue-700 w-full h-6 rounded-t-sm justify-end flex items-center px-2">
                <AiOutlineClose
                    className=" text-white text-xl bg-red-500 rounded-sm border border-white"
                    onClick={() => setToggleError(false)}
                />
            </div>
            <div className="bg-[#f5f5f5] w-full h-full flex-col flex items-start gap-4 p-3 ">
                <div className="flex gap-5">
                    <img src={ErrorC} alt="" width={30} />
                    <div className="flex flex-col justify-center items-start text-xs">
                        <audio autoPlay src={ErrorMp3} />
                        <span>C:/</span>
                        <span>Application not found</span>
                    </div>
                </div>
                <div className="flex items-center w-full justify-center">
                    <button
                        className="border-black border px-10 shadow-[black_-1px_-1px_1px_inset] focus:shadow-[black_1px_1px_1px_inset]"
                        onClick={() => setToggleError(false)}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};
