import { cons } from '@hexlet/pairs';
import random from '../random';
import { game } from '..';

const gameDesc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const createPrimegame = () => {
  const num = random(2, 100);
  const createQuestion = `${num}`;
  const answerGame = prime(num) ? 'yes' : 'no';

  return cons(createQuestion, answerGame);
};
export default () => game(gameDesc, createPrimegame);
