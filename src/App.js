import React from "react";
import "./style.css";

export default function App() {
  return (
<>


    
        <div class="main">
            <div class="player player--0 player--active">
                <h1 class="name" id="name--0" >Player 1</h1>
                <p class="score" id="score--0">43</p> <div class="current"> <p class="current-label">Current</p> <p class="current-score" id="current--0">0</p> </div>
            </div>
            
            <div class="player player--1"  >
            <h1  class="name" id="name--1"> Player 2</h1>
            
            <p class="score" id="score--1">24</p> <div class="current"> <p class="current-label">Current</p> <p class="current-score" id="current--1">0</p> </div>
                
            </div>
        </div>
        <div class="dice">
            <img src="https://i.imgur.com/HLxmLfv.png" class="diceimg" alt=""/>
        </div>
        <div class="footer">
            <button  class="btn btn--new">🔄 New game</button>
            <button class="btn btn--roll">🎲 Roll dice</button> <button class="btn btn--hold">📥 Hold</button>
        </div>

</>

    
    
  );
}
