# Assembly: Endgame

**Assembly: Endgame** is a fun, interactive word guessing game built with React. Your mission: guess the hidden word within 8 incorrect attempts to save the programming world from being dominated by Assembly language!

## Features

- **Word Guessing Gameplay:** Guess the randomly selected word by choosing letters.
- **Programming Language Chips:** Each wrong guess eliminates a programming language. Lose all but Assembly, and the game ends!
- **Visual Feedback:** See which languages are lost and which letters you've guessed.
- **Confetti Celebration:** Win the game and enjoy a confetti celebration.
- **Accessible Design:** Includes ARIA live regions for screen readers.

## How to Play

1. Click letters to guess the hidden word.
2. Each incorrect guess eliminates a programming language chip.
3. You have 8 attempts before Assembly takes over.
4. Win by guessing all letters before running out of attempts.
5. Click "New Game" to play again.

## Getting Started

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/assembly_endgame_project.git
   cd assembly_endgame_project/assembly_endgame
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the development server:**
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/App.jsx` — Main game logic and UI.
- `src/utils.js` — Utility functions for word selection and messages.
- `src/languages.js` — Programming language data for chips.

## Dependencies

- React
- clsx
- react-confetti
- react-use
---

Enjoy saving the programming world!
