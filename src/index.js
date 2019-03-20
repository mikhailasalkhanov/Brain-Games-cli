import readlineSync from 'readline-sync';

export default () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

const isEven = int => (int % 2 === 0 ? 'yes' : 'no');

export const brainEven = () => {
  const playerName = greeting();
  let attempt = 1;

  while (attempt < 4) {
    const evenOrNot = randomInt(1, 1000);
    console.log(`Question: ${evenOrNot}`);
    const playerAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const isCorrectAnswer = isEven(evenOrNot) === playerAnswer;

    if (isCorrectAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${isCorrectAnswer}"`);
      console.log(`Let's try again, ${playerName}`);
      return;
    }

    attempt += 1;
  }

  console.log(`Congratulations, ${playerName}`);
};
