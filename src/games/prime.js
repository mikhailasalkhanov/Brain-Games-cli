import { cons } from 'hexlet-pairs';
import engine, { rounds } from '../engine';
import randomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (int) => {
  for (let i = 2; i <= Math.sqrt(int); i += 1) {
    if (int % i === 0) return false;
  }

  return int > 1;
};

export default () => {
  const gameData = [];

  for (let i = 0; i < rounds; i += 1) {
    const question = randomInt(1, 100);
    const answer = isPrime(question) ? 'yes' : 'no';

    gameData.push(cons(question, answer));
  }

  engine(description, gameData);
};
