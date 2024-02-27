import startGameLogic from '../index.js';
import getRandomNumber from '../help.js';

const description = 'What number is missing in the progression?';

const makeProgression = (startNumber, stepOfProg, progressionLength) => {
  const progression = [];

  for (let i = 1, j = startNumber; i <= progressionLength; i += 1, j += stepOfProg) {
    progression.push(`${j}`);
  }

  return progression;
};

const generateRound = () => {
  const startNumber = getRandomNumber(3, 30);
  const stepOfProg = getRandomNumber(1, 10);
  const progressionLength = 10;

  const progression = makeProgression(startNumber, stepOfProg, progressionLength);

  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const emptySpotValue = '..';

  const answer = progression[hiddenIndex];
  const question = progression;
  question[hiddenIndex] = emptySpotValue;

  return [question.join(' '), answer];
};

const runProgressionGame = () => {
  startGameLogic(description, generateRound);
};

export default runProgressionGame;
