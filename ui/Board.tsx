'use client';

import { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "#/lib/getWinner";

export type SquareState = "O" | "X" | null;

export default function Board() {
  const [squares, setSquares] = useState<SquareState[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  
  const renderSquare = (i: number) => <Square value={squares[i]} onClick={() => handleClick(i)} />;

  const handleClick = (i: number) => {
    const sliceSquares = squares.slice();
    /**
     *
     */
    if (calculateWinner(squares) || squares[i]) return; 

    sliceSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(sliceSquares);
    setXIsNext(prev => !prev); 
  };

  const status = `Next player: ${xIsNext ? 'X' : 'O'}`;  

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div> 
  );
};