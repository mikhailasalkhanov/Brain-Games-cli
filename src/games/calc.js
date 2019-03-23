import { cons } from 'hexlet-pairs';
import engine, { rounds, randomInt } from '../engine';

const description = 'What is the result of the expression?';
const operators = [' + ', ' - ', ' * '];

const generateExpression = () => {
  const leftOperand = randomInt(1, 10);
  const rightOperand = randomInt(1, 10);
  const operator = operators[randomInt(0, operators.length - 1)];

  const question = `${leftOperand}${operator}${rightOperand}`;
  let answer = 0;

  switch (operator) {
    case ' + ':
      answer = leftOperand + rightOperand;
      break;
    case ' - ':
      answer = leftOperand - rightOperand;
      break;
    case ' * ':
      answer = leftOperand * rightOperand;
      break;
    default:
      break;
  }

  return cons(question, answer.toString());
};

export default () => {
  const questionsAndAnswers = [];

  for (let pair = 0; pair < rounds; pair += 1) {
    questionsAndAnswers.push(generateExpression());
  }
  engine(description, questionsAndAnswers);
};
