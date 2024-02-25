import randomNumber from '../help.js';
import startGameLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 !== 0) {
    return false;
  }
  return true;
};

const generateRound = () => {
  const question = randomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const runEvenGame = () => {
  startGameLogic(description, generateRound);
};
export default runEvenGame;

