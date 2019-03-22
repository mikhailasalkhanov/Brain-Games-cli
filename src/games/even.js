import randomInt from '..';
import { cons } from 'hexlet-pairs';
import engine from '../engine';

const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => {
  const questionsAndAnswers = [];

  for (let pair = 1; pair <= 3; pair += 1) {
    const question = randomInt(1, 100);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    questionsAndAnswers.push(cons(question, answer));
  }

  engine(description, questionsAndAnswers);
};
