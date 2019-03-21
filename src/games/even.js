import { cons } from 'hexlet-pairs';
import readlineSync from 'readline-sync';
import { randomInt } from '..';

export default () => {
  const evenOrNot = randomInt(1, 1000);
  console.log(`Question: ${evenOrNot}`);

  const playerAnswer = readlineSync.question('Your answer: ');
  const answer = evenOrNot % 2 === 0 ? 'yes' : 'no';

  return cons(answer, playerAnswer);
};
