import { cons } from 'hexlet-pairs';
import engine, { rounds } from '../engine';
import randomInt from '../utils';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getAnswer = (operator, a, b) => {
  let answer = 0;

  switch (operator) {
    case '+':
      answer = a + b;
      break;
    case '-':
      answer = a - b;
      break;
    case '*':
      answer = a * b;
      break;
    default:
      break;
  }

  return answer.toString();
};

const generateExpression = () => {
  const leftOperand = randomInt(1, 10);
  const rightOperand = randomInt(1, 10);
  const operator = operators[randomInt(0, operators.length - 1)];
  const question = `${leftOperand} ${operator} ${rightOperand}`;

  return cons(question, getAnswer(operator, leftOperand, rightOperand));
};

export default () => {
  const gameData = [];

  for (let i = 0; i < rounds; i += 1) {
    gameData.push(generateExpression());
  }
  engine(description, gameData);
};
