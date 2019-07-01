import { cons } from 'hexlet-pairs';
import engine from '../engine';
import randomInt from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (firstElement, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    const nextElement = firstElement + step * i;
    progression.push(nextElement);
  }

  return progression;
};

export default () => {
  const generateGameData = () => {
    const firstElement = randomInt(0, 100);
    const step = randomInt(1, 10);
    const progression = generateProgression(firstElement, step, progressionLength);

    const hiddenElementPosition = randomInt(0, progressionLength - 1);
    const answer = `${progression[hiddenElementPosition]}`;
    progression[hiddenElementPosition] = '..';
    const question = progression.join(' ');

    return cons(question, answer);
  };

  engine(description, generateGameData);
};
