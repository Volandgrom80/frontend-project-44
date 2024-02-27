import startGameLogic from '../index.js';
import getRandomNumber from '../help.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  let minNumber = number1;
  if (number2 < number1) {
    minNumber = number2;
  }

  let maxDivider;
  for (let i = 1; i <= minNumber; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      maxDivider = i;
    }
  }
  return maxDivider;
};

const generateRound = () => {
  const number1 = getRandomNumber(10, 100);
  const number2 = getRandomNumber(10, 100);

  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2).toString();

  return [question, answer];
};

const runGcdGame = () => {
  startGameLogic(description, generateRound);
};

export default runGcdGame;
