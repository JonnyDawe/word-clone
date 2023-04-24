import Game from '../Game';
import Header from '../Header';
import { WORDS } from '../../data';
import React from 'react';
import { sample } from '../../utils';

function App() {
  const [answer, setAnswer] = React.useState(() => {
    const answer = sample(WORDS)
    console.info({ answer })
    return answer
  })
  function reset() {
    setAnswer(() => {
      const answer = sample(WORDS)
      console.info({ answer })
      return answer
    })

  }

  return (
    <div className="wrapper">
      <Header reset={reset} />

      <div className="game-wrapper">
        <Game answer={answer} />
      </div>
    </div>
  );
}

export default App;
