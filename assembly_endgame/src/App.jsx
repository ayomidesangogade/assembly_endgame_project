import { React, useState } from "react"
import { clsx } from "clsx"
import { languages } from "./languages";

function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetterArray, setGuessedLetterArray] = useState([])

  const alphabets = "abcdefghijklmnopqrstuvwxyz"

  function holdGuessedLetters(letter) {
    setGuessedLetterArray(prev => 
      prev.includes(letter) ? 
      prev : [...prev, letter]
    )
  }
  console.log(guessedLetterArray)
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
          {currentWord.split("").map((letter, index) => {
            const isGuessed = guessedLetterArray.includes(letter)
            const isCorrect = isGuessed && currentWord.includes(letter)
            
            return (
              <span
                style={{display: isCorrect ? "inherit" : "none"}}
                key={index}
              >
                {letter.toUpperCase()}
              </span>
            )
            })}
      </div>
      <div className="keyboard">
        {alphabets.split("").map((letter) => {
          const isGuessed = guessedLetterArray.includes(letter)
          const isCorrect = isGuessed && currentWord.includes(letter)
          const isWrong = isGuessed && !currentWord.includes(letter)
          const className = clsx({
            correct: isCorrect,
            wrong: isWrong
          })
            return (
              <button 
                key={letter}
                className={className}
                onClick={() => holdGuessedLetters(letter)}
              >
                {letter.toUpperCase()}
              </button>
            )
        })}
      </div>
      <button className="new-game">New Game</button>
    </main>
  )
}

export default AssemblyEndgame;