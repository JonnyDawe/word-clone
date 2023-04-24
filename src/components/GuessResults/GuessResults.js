import React from "react";
import { range } from "../../utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { checkGuess } from "../../game-helpers"

function GuessResults({ pastGuesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED, 1).map(
        (rowIndex) => {
          if (rowIndex >= pastGuesses.length) {
            return (<EmptyRow key={`row-${rowIndex}`} rowIndex={rowIndex}></EmptyRow>)
          }
          const checkedGuess = checkGuess(pastGuesses[rowIndex].guess, answer)
          return (
            <p key={`row-${rowIndex}`} className="guess">
              {range(0, 5, 1).map((colIndex) => {
                return (
                  <span key={`row-${rowIndex}-col-${colIndex}`} className={`cell ${checkedGuess[colIndex].status}`}>{checkedGuess[colIndex].letter}</span>
                )
              })}
            </p>
          )
        }
      )}
    </div>
  );
}

function EmptyRow({ rowIndex }) {
  return (<p key={`row-${rowIndex}`} className="guess">
    {range(0, 5, 1).map((colIndex) => {
      return (
        <span
          key={`row-${rowIndex}-col-${colIndex}`}
          className={`cell`}>
        </span>
      )
    })}
  </p>)
}

export default GuessResults;
