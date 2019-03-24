import { cons } from 'hexlet-pairs';
import engine, { rounds } from '../engine';
import randomInt from '../utils';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getAnswer = (operator, a, b) => {
  const expressions = {
    '+': a + b,
    '-': a - b,
    '*': a * b,
  };

  return expressions[operator];
};

export default () => {
  const gameData = [];

  for (let i = 0; i < rounds; i += 1) {
    const leftOperand = randomInt(1, 10);
    const rightOperand = randomInt(1, 10);
    const operator = operators[randomInt(0, operators.length - 1)];

    const question = `${leftOperand} ${operator} ${rightOperand}`;
    const answer = `${getAnswer(operator, leftOperand, rightOperand)}`;

    gameData.push(cons(question, answer));
  }
  engine(description, gameData);
};
