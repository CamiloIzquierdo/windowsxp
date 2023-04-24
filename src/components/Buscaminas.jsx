import React, { useState, useEffect } from "react";

const ROWS = 10;
const COLUMNS = 10;
const MINES = 10;

export function Buscaminas() {
    const [board, setBoard] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState(false);

    useEffect(() => {
        const newBoard = Array(ROWS)
            .fill()
            .map(() => Array(COLUMNS).fill(false));
        let minesPlaced = 0;
        while (minesPlaced < MINES) {
            const row = Math.floor(Math.random() * ROWS);
            const column = Math.floor(Math.random() * COLUMNS);
            if (!newBoard[row][column]) {
                newBoard[row][column] = true;
                minesPlaced++;
            }
        }
        setBoard(newBoard);
        setGameOver(false);
        setWin(false);
    }, []);

    const handleCellClick = (row, column) => {
        if (board[row][column]) {
            setGameOver(true);
        } else {
            const newBoard = [...board];
            newBoard[row][column] = true;
            setBoard(newBoard);
            checkWin(newBoard);
        }
    };

    const checkWin = (board) => {
        let coveredCells = 0;
        board.forEach((row) =>
            row.forEach((cell) => {
                if (!cell) {
                    coveredCells++;
                }
            })
        );
        if (coveredCells === ROWS * COLUMNS - MINES) {
            setWin(true);
        }
    };

    const renderCell = (row, column) => {
        const cellValue = board[row][column];
        if (gameOver && cellValue) {
            return <div className="cell bg-red-600">💣</div>;
        } else if (cellValue) {
            return (
                <div className="cell bg-green-400">
                    {countAdjacentMines(row, column)}
                </div>
            );
        } else {
            return (
                <div
                    className="cell bg-gray-400"
                    onClick={() => handleCellClick(row, column)}
                >
                    🔲
                </div>
            );
        }
    };

    const countAdjacentMines = (row, column) => {
        let count = 0;
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = column - 1; j <= column + 1; j++) {
                if (
                    i >= 0 &&
                    i < ROWS &&
                    j >= 0 &&
                    j < COLUMNS &&
                    board[i][j]
                ) {
                    count++;
                }
            }
        }
        return count;
    };

    const handleResetClick = () => {
        const newBoard = Array(ROWS)
            .fill()
            .map(() => Array(COLUMNS).fill(false));
        let minesPlaced = 0;
        while (minesPlaced < MINES) {
            const row = Math.floor(Math.random() * ROWS);
            const column = Math.floor(Math.random() * COLUMNS);
            if (!newBoard[row][column]) {
                newBoard[row][column] = true;
                minesPlaced++;
            }
        }
        setBoard(newBoard);
        setGameOver(false);
        setWin(false);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Buscaminas</h1>
            <div className="board border-4 border-black rounded-lg">
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex">
                        {row.map((_, columnIndex) => (
                            <div
                                key={`${rowIndex}-${columnIndex}`}
                                className="relative"
                            >
                                {renderCell(rowIndex, columnIndex)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {gameOver && (
                <p className="text-red-600 text-xl font-bold mt-4">
                    Has perdido 😭
                </p>
            )}
            {win && (
                <p className="text-green-400 text-xl font-bold mt-4">
                    ¡Has ganado! 🎉
                </p>
            )}
            <button
                className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 font-bold"
                onClick={handleResetClick}
            >
                Reiniciar
            </button>
        </div>
    );
}
