import React, { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "../winner";
import ScoreWrapper from "./ScoreWrapper";

import "./wrapper.css"


const Wrapper = () => {
  const [gamePlace, setgamePlace] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  const winner = calculateWinner(gamePlace)                                                                                                                                                                                         
  console.log(gamePlace);
  

  const squareClick = (i) => {
    
    if(winner || gamePlace[i]) return;

    gamePlace[i] = xIsNext ? "x" : "o";
    
    setgamePlace(gamePlace);
    setxIsNext(!xIsNext)
  }

  const isTie = () => {
    let filled = true;
    gamePlace.forEach((s)=> {
      if(s == null) {
        filled = false;
      }
    })
  }

 
  

  const refresh = () => {
    return (
      <button className="refresh" onClick = {()=> setgamePlace(Array(9).fill(null)) }>NEW GAME</button>
    )
  }

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
                      gamePlace = {gamePlace}
                      
        />
      </div>
    </div>
    </>
    )
}
export default Wrapper;