/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = '✓';

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: 'correct',
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = 'incorrect';
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    );
    if (misplacedIndex >= 0) {
      status = 'misplaced';
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}

export function getKeyboardState(guesses, answer) {
  const combinedGuesses = [];

  guesses.forEach((guess) => {
    const check = checkGuess(guess.guess, answer);

    check.forEach((key) => {
      const indexInArray = combinedGuesses.findIndex((item) => item.letter === key.letter);

      if (indexInArray !== -1) {
        combinedGuesses[indexInArray].status = key.status;
      } else {
        combinedGuesses.push(key);
      }
    });
  });

  return combinedGuesses;
}



export function getGameState(guesses, answer) {
  if (guesses[guesses.length - 1]?.guess === answer) {
    return {
      state: "success",
      guesses: guesses.length
    }
  }

  if (guesses.length === 6) {
    return {
      state: "failure",
      answer
    }
  }

  return {
    state: "playing"
  }
}
