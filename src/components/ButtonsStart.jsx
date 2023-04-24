import * as Images from "../../public/img/Index";

export const ButtonsStart = () => {
    return (
        <div className="flex gap-2 items-center justify-end w-full px-2">
            <div className="hover:bg-blue-700 flex items-center gap-2 cursor-default pr-1">
                <img src={Images.Suspense} alt="" className="w-6 h-6" />
                <span className="text-xs text-white">Log Off</span>
            </div>
            <div className="hover:bg-blue-700 flex items-center gap-2 cursor-default pr-1">
                <img src={Images.Off} alt="" className="w-6 h-6" />
                <span className="text-xs text-white">Turn Off Computer</span>
            </div>
        </div>
    );
};
