import readlineSync from 'readline-sync';

const startGameLogic = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  const roundsCount = 3;

  for (let i = 1; i <= roundsCount; i += 1) {
    const [task, rightAnswer] = generateRound();
    console.log(`Question: ${task}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGameLogic;
