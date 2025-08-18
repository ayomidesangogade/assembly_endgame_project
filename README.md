Assembly: Endgame
Assembly: Endgame is a fun, interactive word guessing game built with React. Your mission: guess the hidden word within 8 incorrect attempts to save the programming world from being dominated by Assembly language!

Features
Word Guessing Gameplay: Guess the randomly selected word by choosing letters.
Programming Language Chips: Each wrong guess eliminates a programming language. Lose all but Assembly, and the game ends!
Visual Feedback: See which languages are lost and which letters you've guessed.
Confetti Celebration: Win the game and enjoy a confetti celebration.
Accessible Design: Includes ARIA live regions for screen readers.
How to Play
Click letters to guess the hidden word.
Each incorrect guess eliminates a programming language chip.
You have 8 attempts before Assembly takes over.
Win by guessing all letters before running out of attempts.
Click "New Game" to play again.
Getting Started
Clone the repository:

Install dependencies:

Start the development server:

Open http://localhost:3000 in your browser.

Project Structure
App.jsx — Main game logic and UI.
src/utils.js — Utility functions for word selection and messages.
src/languages.js — Programming language data for chips.
Dependencies
React
clsx
react-confetti
react-use
License
MIT License

Enjoy saving the programming world!
