import { React, useState } from "react"
import { languages } from "./languages";

function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react")

  const alphabets = "abcdefghijklmnopqrstuvwxyz"

  // function lagata() {
  //   console.log(currentWord.split(""))
  // }
  // console.log(lagata())
  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <div className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </div>
      <div className="language-chips">
        {languages.map((lang) => 
          <span 
            key={lang.name} 
            className="chip" 
            style={{backgroundColor: lang.backgroundColor, color: lang.color}}
          >
            {lang.name}
          </span>)}
      </div>
      <div className="word">
          {currentWord.split("").map((letter, index) =>
            <span 
              key={index}
            >
              {letter.toUpperCase()}
            </span>)}
      </div>
      <div className="keyboard">
        {alphabets.split("").map((letter) => 
          <button 
            key={letter}
          >
            {letter.toUpperCase()}
          </button>)}
      </div>
      <button className="new-game">New Game</button>
    </main>
  )
}

export default AssemblyEndgame;