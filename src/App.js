import React from "react";
import "./style.css";

export default function App() {
  return (
    <>
      <div className="main">
        <div className="player player--0 player--active">
          <h1 className="name" id="name--0">
            Player 1
          </h1>
          <p className="score" id="score--0">
            43
          </p>{" "}
          <div className="current">
            {" "}
            <p className="current-label">Current</p>{" "}
            <p className="current-score" id="current--0">
              0
            </p>{" "}
          </div>
        </div>

        <div className="player player--1">
          <h1 className="name" id="name--1">
            {" "}
            Player 2
          </h1>
          <p className="score" id="score--1">
            24
          </p>{" "}
          <div className="current">
            {" "}
            <p className="current-label">Current</p>{" "}
            <p className="current-score" id="current--1">
              0
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="dice">
        <img src="images/dice-5.png" className="diceimg" alt="" />
      </div>
      <div className="footer">
        <button className="btn btn--new">🔄 New game</button>
        <button className="btn btn--roll">🎲 Roll dice</button>{" "}
        <button className="btn btn--hold">📥 Hold</button>
      </div>
    </>
  );
}
