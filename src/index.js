import readlineSync from 'readline-sync';
import brainEven from './games/even';
import brainCalc from './games/calc';

export const askPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

export const gameDescription = (game) => {
  switch (game) {
    case 'brain-even':
      console.log('Answer "yes" if number even otherwise answer "no".\n');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?\n');
      break;
    default:
      break;
  }
};

export const selectGame = (game) => {
  if (game === 'brain-even') {
    return brainEven();
  }

  return brainCalc();
};
