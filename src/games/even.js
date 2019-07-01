import { cons } from 'hexlet-pairs';
import engine from '../engine';
import randomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = int => int % 2 === 0;

export default () => {
  const generateGameData = () => {
    const question = randomInt(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';

    return cons(question, answer);
  };

  engine(description, generateGameData);
};
