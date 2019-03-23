import { cons } from 'hexlet-pairs';
import engine, { rounds, randomInt } from '../engine';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = int => int % 2 === 0;

export default () => {
  const questionsAndAnswers = [];

  for (let pair = 1; pair <= rounds; pair += 1) {
    const question = randomInt(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    questionsAndAnswers.push(cons(question, answer));
  }

  engine(description, questionsAndAnswers);
};
