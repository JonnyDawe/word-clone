import React from "react";

function SuccessBanner({ guessCount }) {
  return (<div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong> {guessCount} guesses</strong>.
    </p>
  </div>)
}

export default SuccessBanner;
