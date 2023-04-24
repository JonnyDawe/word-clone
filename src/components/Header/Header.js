import React from 'react';

function Header({ reset }) {
  return (
    <header>
      <h1>Word Game</h1>
      <button onClick={reset}>RESET</button>
    </header>
  );
}

export default Header;
