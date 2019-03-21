import { cons } from 'hexlet-pairs';
import readlineSync from 'readline-sync';
import { isEven, randomInt } from '..';

export default () => {
  const evenOrNot = randomInt(1, 1000);
  console.log(`Question: ${evenOrNot}`);

  const playerAnswer = readlineSync.question('Your answer: ');
  const answer = isEven(evenOrNot);

  return cons(answer, playerAnswer);
};
