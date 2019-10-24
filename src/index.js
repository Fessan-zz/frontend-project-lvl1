import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;
export const game = (gameDescription, getDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 1; i <= roundsCount; i += 1) {
    const resultDataGame = getDataGame();
    const corretcNumber = car(resultDataGame);
    const correctAnswer = cdr(resultDataGame);

    console.log(`Question: ${corretcNumber}`);

    const userAnswer = readlineSync.question('Your answer? ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(.Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default game;
