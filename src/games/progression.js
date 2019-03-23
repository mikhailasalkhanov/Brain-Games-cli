import { cons } from 'hexlet-pairs';
import engine, { rounds } from '../engine';
import randomInt from '../utils';


const description = 'What number is missing in the progression?';

const getQuestion = (acc, current) => `${acc} ${current}`;

const generateProgression = () => {
  const progression = [];
  const progressionLen = 10;
  const firstElem = randomInt(1, 100);
  const step = randomInt(1, 10);

  for (let i = 1; i <= progressionLen; i += 1) {
    const nextElem = firstElem + step * (i - 1);
    progression.push(nextElem);
  }

  return progression;
};

export default () => {
  const gameData = [];

  for (let i = 0; i < rounds; i += 1) {
    const progression = generateProgression();
    const hiddenElemPosition = randomInt(0, 9);

    const answer = `${progression[hiddenElemPosition]}`;
    progression[hiddenElemPosition] = '..';
    const question = progression.reduce(getQuestion);

    gameData.push(cons(question, answer));
  }

  engine(description, gameData);
};
