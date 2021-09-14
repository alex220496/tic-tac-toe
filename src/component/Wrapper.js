import React, { useState } from "react";
import Square from "./Square";
import ScoreWrapper from "./ScoreWrapper";

import "./wrapper.css"
import Modal from "./Modal";


const Wrapper = () => {
  const [gamePlace, setgamePlace] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  const [modalActive, setModalActive] = useState(true);

  // fu calc winner
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setTimeout(()=> {
          setgamePlace(Array(9).fill(null))
          setxIsNext(true) 
        }, 3000)
        return squares[a];
      }
      else if(!squares.includes(null)) {
        setTimeout(()=> {
          setgamePlace(Array(9).fill(null))
          setxIsNext(true) 
        }, 3000)
          return 'draw';
        }
      }
      return null;
  }

  const winner = calculateWinner(gamePlace) 

  // fu X : O
  const squareClick = (i) => {
    if(winner || gamePlace[i]) return;

    gamePlace[i] = xIsNext ? "x" : "o";
    setgamePlace(gamePlace);
    setxIsNext(!xIsNext)
  }

 
  
//   Btn refresh in ScoreWrapper
  const refresh = () => {
    return (
      <button className="refresh" onClick = {()=>setgamePlace(Array(9).fill(null)) }>NEW GAME</button>
    )}

    return (
      <>
        <div className="wrapper">
          <div className="col-md-8">
            <div className="game-place">
                {
                  gamePlace.map((square, i) => (
                    <Square key ={i} value={square} onClick={()=> squareClick(i)}/>
                  ))  
                }
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
                <div className="line-4"></div>
            </div>
          </div>
          <div className="col-md-4">
                    <ScoreWrapper 
                        refresh ={refresh}
                        winner = {winner}
                        xIsNext = {xIsNext}      
                    />
          </div>
        </div>
                    <Modal 
                        modalActive={modalActive}
                        setModalActive={setModalActive}
                    />
      </>
    
    )
}
export default Wrapper;