import React from 'react';


import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'

import { getGameState, getKeyboardState } from "../../game-helpers"
import SuccessBanner from "../SuccessBanner"
import FailureBanner from "../FailureBanner"
import Keyboard from "../Keyboard"

function Game({ answer }) {

  const [pastGuesses, setPastGuesses] = React.useState([])

  React.useEffect(() => {
    setPastGuesses([]);
  }, [answer]);

  function addGuess(itemString) {
    setPastGuesses([...pastGuesses, { guess: itemString }])
  }

  const gameState = getGameState(pastGuesses, answer)
  const keyboardState = getKeyboardState(pastGuesses, answer)

  return <>
    <GuessResults pastGuesses={pastGuesses} answer={answer}></GuessResults>
    <GuessInput addItem={addGuess} gameEnded={gameState.state === "success" || gameState.state === "failure"}></GuessInput>
    <Keyboard keyboardState={keyboardState}></Keyboard>
    {gameState.state === "success" && (<SuccessBanner guessCount={gameState.guesses}></SuccessBanner>)}
    {gameState.state === "failure" && (<FailureBanner answer={answer}></FailureBanner>)}

  </>;
}

export default Game;
