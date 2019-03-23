import { cons } from 'hexlet-pairs';
import engine, { rounds } from '../engine';
import randomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = int => int % 2 === 0;

export default () => {
  const gameData = [];

  for (let i = 1; i <= rounds; i += 1) {
    const question = randomInt(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    gameData.push(cons(question, answer));
  }

  engine(description, gameData);
};
