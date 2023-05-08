import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [folders, setFolders] = useState([]);
    const [modal, setModal] = useState(false);
    const [toggleError, setToggleError] = useState(false);
    const [level, setLevel] = useState("easy");

    const values = {
        folders,
        setFolders,
        modal,
        setModal,
        toggleError,
        setToggleError,
        level,
        setLevel,
    };

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    );
};
