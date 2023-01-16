'use client';

import { useState } from "react";

// components
import Board from "./Board";

// lib
import squaresData, { type HistorySquare } from "#/lib/data/square";
import { calculateWinner } from "#/lib/getWinner";

export default function Game() {
  const [history, setHistory] = useState<HistorySquare>([{ squares: squaresData }]);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [stepNumber, setStepNumber] = useState<number>(0);
  
  const handleClick = (i: number) => {
    const sliceHistory = history.slice(0, stepNumber + 1);
    const { squares } = sliceHistory[sliceHistory.length - 1];
    const sliceSquares = squares.slice();
 
    if (calculateWinner(squares) || squares[i]) return;

    sliceSquares[i] = xIsNext ? 'X' : 'O';
 
    setHistory(history.concat([{ squares: sliceSquares }]));
    setStepNumber(history.length);
    setXIsNext(prev => !prev); 
  } 

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber]; 
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });  

  let status; 
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i: number) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{ status }</div>
        <ol>{ moves }</ol>
      </div>
    </div>
  )
};