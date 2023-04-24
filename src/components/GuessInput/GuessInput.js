import React from "react";

function GuessInput({ addItem, gameEnded }) {
  const [guess, setGuess] = React.useState("")

  function submitGuess() {
    addItem(guess)
    setGuess("")
  }

  return (
    <form onSubmit={(ev) => {
      ev.preventDefault()
      submitGuess()
    }}
      className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={gameEnded}
        pattern="[a-zA-Z]{5}"
        onChange={(ev) => {
          if (ev.target.value.length <= 5) {
            setGuess(ev.target.value.toLocaleUpperCase())
          }

        }}
        value={guess}
      />
    </form>
  );
}

export default GuessInput;
