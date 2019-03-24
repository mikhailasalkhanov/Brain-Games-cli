import { cons } from 'hexlet-pairs';
import engine, { rounds } from '../engine';
import randomInt from '../utils';


const description = 'What number is missing in the progression?';
const length = 10;

const generateProgression = () => {
  const progression = [];
  const firstElement = randomInt(1, 100);
  const step = randomInt(1, 10);

  for (let i = 0; i < length; i += 1) {
    const nextElement = firstElement + step * i;
    progression.push(nextElement);
  }

  return progression;
};

export default () => {
  const gameData = [];

  for (let i = 0; i < rounds; i += 1) {
    const progression = generateProgression();
    const hiddenElementPosition = randomInt(0, length - 1);
    const answer = `${progression[hiddenElementPosition]}`;
    progression[hiddenElementPosition] = '..';
    const question = progression.join(' ');

    gameData.push(cons(question, answer));
  }

  engine(description, gameData);
};
