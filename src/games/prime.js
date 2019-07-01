import { cons } from 'hexlet-pairs';
import engine from '../engine';
import randomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (int) => {
  for (let i = 2; i <= Math.sqrt(int); i += 1) {
    if (int % i === 0) return false;
  }

  return int > 1;
};

export default () => {
  const generateGameData = () => {
    const question = randomInt(1, 100);
    const answer = isPrime(question) ? 'yes' : 'no';

    return cons(question, answer);
  };

  engine(description, generateGameData);
};
