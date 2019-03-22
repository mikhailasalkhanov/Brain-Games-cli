import { cons } from 'hexlet-pairs';
import randomInt from '..';
import engine from '../engine';

const description = 'What is the result of the expression?';
const operators = [' + ', ' - ', ' * '];

const generateExpression = () => {
  const leftOperand = randomInt(1, 10);
  const rightOperand = randomInt(1, 10);
  const randomIndex = randomInt(0, operators.length - 1);

  const question = `${leftOperand}${operators[randomIndex]}${rightOperand}`;
  let answer = 0;

  switch (randomIndex) {
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
  const questionsAndAnswers = [];

  for (let pair = 1; pair <= 3; pair += 1) {
    questionsAndAnswers.push(generateExpression());
  }
  engine(description, questionsAndAnswers);
};
