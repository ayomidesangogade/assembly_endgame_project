import { React, useState } from "react"
import { clsx } from "clsx"
import { getFarewellText, getRandomWord } from "./utils";
import { languages } from "./languages";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  const [guessedLetterArray, setGuessedLetterArray] = useState([])

  const wrongGuessCount = guessedLetterArray.filter(letter => !currentWord.includes(letter)).length
  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameWon = currentWord.split("").every(letter => guessedLetterArray.includes(letter))
  const isGameOver = isGameLost || isGameWon
  const lastGuessedLetter = guessedLetterArray[guessedLetterArray.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

  const alphabets = "abcdefghijklmnopqrstuvwxyz"

  function holdGuessedLetters(letter) {
    setGuessedLetterArray(prev => 
      prev.includes(letter) ? 
      prev : [...prev, letter]
    )
  }

  function resetGame() {
    setCurrentWord(getRandomWord())
    setGuessedLetterArray([])
  }

  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="farewell-message">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      )
    }

    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      )
    } 
    if (isGameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      )
    }

    return null
  }

  const gameStatusClass = clsx("game-status", 
    {
      won: isGameWon, 
      lost: isGameLost, 
      farewell: !isGameOver && isLastGuessIncorrect
    }
  )

  const { width, height } = useWindowSize();
  
  return (
    <main>
      {isGameWon && <Confetti width={width} height={height} />}
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <div 
        aria-live="polite"
        className={gameStatusClass}
        role="status"
      >
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
            const className = clsx(isGameLost && !guessedLetterArray.includes(letter) && "missed-letter")
            return (
              <span
                key={index}
                className={className}
              >
                {!isGameLost ? isCorrect ? letter.toUpperCase() : "" : letter.toUpperCase()}
              </span>
            )
            })}
      </div>

      {/* Combined visually-hidden aria-live region for status updates */}
      <div
        className="sr-only"
        role="status"
        aria-live="polite"
      >
        <p>
          {currentWord.includes(lastGuessedLetter) ?
            `Good guess! The letter ${lastGuessedLetter} is in the word.` :
            `Sorry, the letter ${lastGuessedLetter} is not in the word.`
          }
          You have {8 - wrongGuessCount} attempts left.
        </p>
        <p>
          Current word: {currentWord.split("").map(letter => guessedLetterArray.includes(letter) ? letter + "." : "blank.").join(" ")}
        </p>
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
                disabled={isGameOver}
                aria-disabled={guessedLetterArray.includes(letter)}
                aria-label={`Letter ${letter}`}
                onClick={() => holdGuessedLetters(letter)}
              >
                {letter.toUpperCase()}
              </button>
            )
        })}
      </div>
      {isGameOver && <button className="new-game" onClick={resetGame}>New Game</button>}
    </main>
  )
}

export default AssemblyEndgame;