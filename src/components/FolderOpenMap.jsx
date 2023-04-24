import { useContext, useMemo } from "react";
import { Data } from "../data/data";
import { GlobalContext } from "../context/GlobalContext";

export const FolderOpenMap = () => {
    const { folders, setFolders } = useContext(GlobalContext);

    const checkSelectedFolder = useMemo(() => {
        return folders.find((item) => item.selected);
    });

    const openExplorer = (explorer) => {
        const exists = folders.some((item) => item.id === explorer.id);

        if (!exists) {
            const updatedFolders = [
                ...folders.map((item) => ({ ...item, selected: false })),
                { ...explorer, selected: true },
            ];
            setFolders(updatedFolders);
        } else {
            const updatedFolders = folders.map((item) =>
                item.id === explorer.id
                    ? { ...item, selected: true }
                    : { ...item, selected: false }
            );

            setFolders(updatedFolders);
        }
    };

    return (
        <div className="flex flex-wrap gap-7 w-full h-fit">
            {(checkSelectedFolder.names === "Proyectos" &&
                Data.map(
                    (explorer) =>
                        explorer.category === "projects" && (
                            <div
                                key={explorer.id}
                                className="flex items-center gap-1 cursor-pointer h-fit"
                                onClick={() => openExplorer(explorer)}
                            >
                                <img src={explorer.icon} alt="" width={50} />
                                <span className="text-xs max-w-[100px] text-center">
                                    {explorer.names}
                                </span>
                            </div>
                        )
                )) ||
                (checkSelectedFolder.names === "Conocimientos" &&
                    Data.map(
                        (conoci) =>
                            conoci.category === "conocimientos" && (
                                <div
                                    key={conoci.id}
                                    className="flex items-center gap-1 w-fit cursor-pointer h-fit"
                                >
                                    <img src={conoci.icon} alt="" width={50} />
                                    <span className="text-xs max-w-[100px] text-center">
                                        {conoci.names}
                                    </span>
                                </div>
                            )
                    )) ||
                (checkSelectedFolder.names === "Sobre mi" &&
                    Data.map(
                        (about) =>
                            about.category === "sobremi" && (
                                <div
                                    key={about.id}
                                    className="flex items-center gap-1 w-fit cursor-pointer h-fit"
                                    onClick={() => openExplorer(about)}
                                >
                                    <img src={about.icon} alt="" width={40} />
                                    <span className="text-xs max-w-[100px] text-center">
                                        {about.names}
                                    </span>
                                </div>
                            )
                    ))}
        </div>
    );
};
