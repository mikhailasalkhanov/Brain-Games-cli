import { cons } from 'hexlet-pairs';
import readlineSync from 'readline-sync';
import { randomInt } from '..';

export default () => {
  const leftOperand = randomInt(1, 10);
  const rightOperand = randomInt(1, 10);

  const operators = [' + ', ' - ', ' * '];
  const i = randomInt(0, 2);

  const question = `${leftOperand}${operators[i]}${rightOperand}`;
  let answer = 0;

  switch (i) {
    case 0:
      answer = leftOperand + rightOperand;
      break;
    case 1:
      answer = leftOperand - rightOperand;
      break;
    case 2:
      answer = leftOperand * rightOperand;
      break;
    default:
      break;
  }

  console.log(`Question: ${question}`);
  const playerAnswer = parseInt(readlineSync.question('Your answer: '), 10);

  return cons(answer, playerAnswer);
};
