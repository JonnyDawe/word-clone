import React from "react";

function getKeyStatus(character, keyboardState) {
  return keyboardState.find((item) => item.letter === character)?.status ?? "none"
}

function Keyboard({ keyboardState }) {
  return (
    <div className="keyboard-wrapper">
      <p className="keyboard-row">{"QWERTYUIOP".split("").map(character => {
        return (<Key key={`key-${character}`} character={character} status={getKeyStatus(character, keyboardState)}></Key>)
      })}</p>
      <p className="keyboard-row">{"ASDFGHJKL".split("").map(character => {
        return (<Key key={`key-${character}`} character={character} status={getKeyStatus(character, keyboardState)}></Key>)
      })}</p>
      <p className="keyboard-row">{"ZXCVBNM".split("").map(character => {
        return (<Key key={`key-${character}`} character={character} status={getKeyStatus(character, keyboardState)}></Key>)
      })}</p>

    </div>);
}

function Key({ character, status }) {
  return <span className={`key ${status}`}>{character}</span>
}

export default Keyboard;
