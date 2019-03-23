import { cons } from 'hexlet-pairs';
import engine, { rounds } from '../engine';
import randomInt from '../utils';


const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGreatestCommonDivisor(b, a % b);
};

export default () => {
  const gameData = [];

  for (let i = 1; i <= rounds; i += 1) {
    const int1 = randomInt(1, 100);
    const int2 = randomInt(1, 100);

    const question = `${int1} ${int2}`;
    const answer = getGreatestCommonDivisor(int1, int2).toString();

    gameData.push(cons(question, answer));
  }

  engine(description, gameData);
};
