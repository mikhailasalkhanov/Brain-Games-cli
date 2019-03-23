import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const rounds = 3;

export default (gameDescription, gameData) => {
  console.log('Welcome to the Brain Games');
  console.log(gameDescription, '\n');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  for (let i = 0; i < rounds; i += 1) {
    const question = car(gameData[i]);
    const correctAnswer = cdr(gameData[i]);

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${playerName}`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};
