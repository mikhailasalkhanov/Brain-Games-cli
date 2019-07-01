import { cons } from 'hexlet-pairs';
import engine from '../engine';
import randomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGreatestCommonDivisor(b, a % b);
};

export default () => {
  const generateGameData = () => {
    const int1 = randomInt(1, 100);
    const int2 = randomInt(1, 100);
    const question = `${int1} ${int2}`;
    const answer = getGreatestCommonDivisor(int1, int2).toString();

    return cons(question, answer);
  };

  engine(description, generateGameData);
};
