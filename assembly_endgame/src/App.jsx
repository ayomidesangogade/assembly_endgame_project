import { React, useState } from "react"
import { clsx } from "clsx"
import { getFarewellText } from "./utils";
import { languages } from "./languages";

function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetterArray, setGuessedLetterArray] = useState([])

  const wrongGuessCount = guessedLetterArray.filter(letter => !currentWord.includes(letter)).length
  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameWon = currentWord.split("").every(letter => guessedLetterArray.includes(letter))
  const isGameOver = isGameLost || isGameWon

  const alphabets = "abcdefghijklmnopqrstuvwxyz"

  function holdGuessedLetters(letter) {
    setGuessedLetterArray(prev => 
      prev.includes(letter) ? 
      prev : [...prev, letter]
    )
  }

  const wrongGuessArray = guessedLetterArray.filter(letter => !currentWord.includes(letter))
  const array = []
  wrongGuessArray.map((message, index) => {
    array.push(getFarewellText(languages[index].name))
  })
  function renderGameStatus() {
    if (!isGameOver) {
      return (
        <>
          {array[array.length-1]}
        </>
      )
    }

    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      )
    } else {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      )
    }
  }

  const gameStatusClass = clsx("game-status", {won: isGameWon, lost: isGameLost})
  
  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <div className={gameStatusClass}>
        {renderGameStatus()}
      </div>
      <div className="language-chips">
        {languages.map((lang, index) => {
          const isLanguageLost = index < wrongGuessCount
          const className = clsx("chip", isLanguageLost && "lost")
          return (
            <span 
              key={lang.name} 
              className={className} 
              style={{backgroundColor: lang.backgroundColor, color: lang.color}}
            >
              {lang.name}
            </span>)})}
      </div>
      <div className="word">
          {currentWord.split("").map((letter, index) => {
            const isGuessed = guessedLetterArray.includes(letter)
            const isCorrect = isGuessed && currentWord.includes(letter)
            
            return (
              <span
                key={index}
              >
                {isCorrect ? letter.toUpperCase() : ""}
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
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  )
}

export default AssemblyEndgame;