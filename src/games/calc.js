import startGameLogic from '../index.js';
import getRandomNumber from '../help.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    case '+':
      return number1 + number2;
    default:
      return `Watch out of unknown operator: ${operator}`;
  }
};

const generateRound = () => {
  const operators = ['-', '*', '+'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  const randomOperator = operators[randomIndex];

  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);

  const question = `${number1} ${randomOperator} ${number2}`;

  const answer = calculate(number1, number2, randomOperator).toString();

  return [question, answer];
};

const runCalcGame = () => {
  startGameLogic(description, generateRound);
};

export default runCalcGame;
