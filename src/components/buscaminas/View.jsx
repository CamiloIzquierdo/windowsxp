import { useContext, useState } from "react";
import { Smile } from "../../../public/img/Index";
import { GlobalContext } from "../../context/GlobalContext";
import { ButtonFolder } from "../ButtonFolder";
import { Game } from "./Game";
import Cell from "./Cell";

export const View = () => {
    const [gameDrop, setGameDrop] = useState(false);
    const { level } = useContext(GlobalContext);

    const ROWS = 9;
    const COLUMNS = 9;

    const [board, setBoard] = useState(() => {
        const initialBoard = [];
        for (let i = 0; i < ROWS; i++) {
            const row = [];
            for (let j = 0; j < COLUMNS; j++) {
                row.push({
                    row: i,
                    col: j,
                    isRevealed: false,
                    isMine: false,
                    neighborMineCount: 0,
                });
            }
            initialBoard.push(row);
        }
        return initialBoard;
    });
    console.log(board);
    const handleCellClick = (row, col) => {
        // Obtiene la celda correspondiente de la matriz de objetos
        const cell = board[row][col];

        // Si la celda ya está revelada, no hace nada
        if (cell.isRevealed) {
            return;
        }

        // Si la celda contiene una mina, termina el juego
        if (cell.isMine) {
            alert("Perdiste!");
            // Aquí podrías reiniciar el juego o hacer lo que quieras
            return;
        }

        // Cuenta el número de minas adyacentes
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const rowToCheck = row + i;
                const colToCheck = col + j;
                if (
                    rowToCheck >= 0 &&
                    rowToCheck < ROWS &&
                    colToCheck >= 0 &&
                    colToCheck < COLUMNS &&
                    board[rowToCheck][colToCheck].isMine
                ) {
                    count++;
                }
            }
        }

        // Actualiza la celda en la matriz de objetos con el número de minas adyacentes
        cell.neighborMineCount = count;

        // Si la celda no tiene minas adyacentes, revela todas las celdas adyacentes a ella recursivamente
        if (count === 0) {
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    const rowToCheck = row + i;
                    const colToCheck = col + j;
                    if (
                        rowToCheck >= 0 &&
                        rowToCheck < ROWS &&
                        colToCheck >= 0 &&
                        colToCheck < COLUMNS &&
                        !board[rowToCheck][colToCheck].isRevealed
                    ) {
                        handleCellClick(rowToCheck, colToCheck);
                    }
                }
            }
        }

        // Actualiza el estado del componente con la matriz de objetos actualizada
        setBoard([...board]);
    };
    console.log(handleCellClick);
    return (
        <div>
            <div
                className={`absolute ${
                    level === "easy"
                        ? "bottom-[141px]"
                        : level
                        ? "bottom-[188px]"
                        : "bottom-[232px]"
                } left-[calc(50%-80px)]`}
            >
                <ButtonFolder onClick={() => setGameDrop(!gameDrop)} />
            </div>
            <div className="relative">
                <div className="flex justify-center">
                    <Game />
                </div>
                <div className="board">
                    {board.map((row, rowIndex) => (
                        <div key={rowIndex} className="board-row">
                            {row.map((cell, colIndex) => (
                                <Cell
                                    key={`${rowIndex}-${colIndex}`}
                                    row={rowIndex}
                                    col={colIndex}
                                    isRevealed={cell.isRevealed}
                                    isMine={cell.isMine}
                                    neighborMineCount={cell.neighborMineCount}
                                    onCellClick={() => handleCellClick}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default View;
