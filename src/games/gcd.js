import { cons } from 'hexlet-pairs';
import engine, { rounds, randomInt } from '../engine';

const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }

  return greatestCommonDivisor(b, a % b);
};

export default () => {
  const questionsAndAnswers = [];

  for (let pair = 1; pair <= rounds; pair += 1) {
    const int1 = randomInt(1, 100);
    const int2 = randomInt(1, 100);

    const question = `${int1} ${int2}`;
    const answer = greatestCommonDivisor(int1, int2).toString();

    questionsAndAnswers.push(cons(question, answer));
  }

  engine(description, questionsAndAnswers);
};
