import { cons } from 'hexlet-pairs';
import engine, { rounds } from '../engine';
import randomInt from '../utils';


const description = 'What number is missing in the progression?';
const progressionLen = 10;

const generateProgression = () => {
  const progression = [];
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
    const positionHiddenElem = randomInt(0, progressionLen - 1);
    const hiddenElem = progression[positionHiddenElem];

    const answer = `${hiddenElem}`;
    progression[positionHiddenElem] = '..';
    const question = progression.join(' ');

    gameData.push(cons(question, answer));
  }

  engine(description, gameData);
};
