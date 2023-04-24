import { createContext, useState } from "react";
import { FolderOpen } from "../components/FolderOpen";
import { InternetExplorer } from "../components/InternetExplorer";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [folders, setFolders] = useState([]);
    const [modal, setModal] = useState(false);
    const [toggleError, setToggleError] = useState(false);

    const values = {
        folders,
        setFolders,
        modal,
        setModal,
        toggleError,
        setToggleError,
    };

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    );
};
