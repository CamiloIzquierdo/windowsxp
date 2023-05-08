import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Cell = ({
    row,
    col,
    isRevealed,
    isMine,
    neighborMineCount,
    onCellClick,
}) => {
    const { level } = useContext(GlobalContext);

    const handleClick = () => {
        if (!isRevealed) {
            // Si la celda no está revelada, llama al manejador de clics
            onCellClick(row, col);
        }
        console.log({ row, col });
    };

    let bgColor;
    let text = "";

    // Si la celda está revelada, muestra su contenido
    if (isRevealed) {
        bgColor = "bg-gray-400";
        if (isMine) {
            // Si la celda contiene una mina, muestra el ícono de la mina
            text = <i className="fas fa-bomb text-red-600">a</i>;
        } else if (neighborMineCount > 0) {
            // Si la celda tiene minas adyacentes, muestra el número de minas adyacentes
            text = neighborMineCount;
        }
    } else {
        // Si la celda no está revelada, muestra el botón de la celda
        bgColor = "bg-gray-200";
        text = <i className="fas fa-question text-gray-600"></i>;
    }

    // Establece los estilos del botón de la celda según el nivel de dificultad
    let btnStyles = "w-10 h-10 rounded-md focus:outline-none";
    if (level === "easy") {
        btnStyles += " text-sm";
    } else if (level === "medium") {
        btnStyles += " text-lg";
    } else {
        btnStyles += " text-xl";
    }

    return (
        <button
            className={`${bgColor} ${btnStyles}`}
            onClick={() => handleClick()}
            disabled={isRevealed}
        >
            {text}
        </button>
    );
};

export default Cell;
