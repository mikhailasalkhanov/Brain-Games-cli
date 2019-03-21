import { car, cdr } from 'hexlet-pairs';
import { askPlayerName, gameDescription, selectGame } from '.';

export default (nameOfTheGame) => {
  console.log('Welcome to the Brain Games');
  gameDescription(nameOfTheGame);

  const playerName = askPlayerName();
  let attempt = 1;

  while (attempt < 4) {
    const gameResult = selectGame(nameOfTheGame);
    const correctAnswer = car(gameResult);
    const playerAnswer = cdr(gameResult);

    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${playerName}`);
      return;
    }

    attempt += 1;
  }
  console.log(`Congratulations, ${playerName}!`);
};
