import { randomInt } from '..';
import { cons } from 'hexlet-pairs';
import engine from '../engine';


export default () => {
  const isEven = int => (int % 2 === 0 ? 'yes' : 'no');

  const question1 = randomInt(1, 100);
  const question2 = randomInt(1, 100);
  const question3 = randomInt(1, 100);

  const questionsAndAnswers = [
    cons(question1, isEven(question1)),
    cons(question2, isEven(question2)),
    cons(question3, isEven(question3))];
  engine('Answer "yes" if number even otherwise answer "no".', questionsAndAnswers);
};
