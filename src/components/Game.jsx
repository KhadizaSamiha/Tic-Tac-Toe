import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(false);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length -1);
  };

  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
}

  const moves = history.map((squares, move) =>{
    let description;
    if(move>0){
      description = `Go to the move # ${move}`
    }
    else{
      description = `Go to start your game`
    }

    return (
      <li key={move}>
        <button onClick={()=> jumpTo(move)}>{description}</button>
      </li>
    )
  })
  return (
    <>
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div><ol>{moves}</ol></div>
    </>
  );
};

export default Game;
