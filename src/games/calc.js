import { cons } from 'hexlet-pairs';
import { randomInt } from '..';
import engine from '../engine';

const generateExpression = () => {
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

  return cons(question, answer.toString());
};

export default () => {
  const questionsAndAnswers = [ generateExpression(), generateExpression(), generateExpression()];
  engine('What is the result of the expression?', questionsAndAnswers);
};
