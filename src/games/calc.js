import { cons } from 'hexlet-pairs';
import engine from '../engine';
import randomInt from '../utils';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const expressions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export default () => {
  const generateGameData = () => {
    const leftOperand = randomInt(1, 10);
    const rightOperand = randomInt(1, 10);
    const operator = operators[randomInt(0, operators.length - 1)];
    const question = `${leftOperand} ${operator} ${rightOperand}`;
    const answer = `${expressions[operator](leftOperand, rightOperand)}`;

    return cons(question, answer);
  };

  engine(description, generateGameData);
};
