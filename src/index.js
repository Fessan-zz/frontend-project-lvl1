import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const counterGame = 3;
export const game = (gameDesc, gameInfo) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDesc);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 1; i <= counterGame; i += 1) {
    const resultGameInfo = gameInfo();
    const corretcNumber = car(resultGameInfo);
    const correctAnswer = cdr(resultGameInfo);

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
