import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const rounds = 3;

export const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

export default (gameDescription, questionsAndAnswers) => {
  console.log('Welcome to the Brain Games');
  console.log(gameDescription, '\n');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  for (let attempt = 0; attempt < rounds; attempt += 1) {
    const question = car(questionsAndAnswers[attempt]);
    const correctAnswer = cdr(questionsAndAnswers[attempt]);

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
