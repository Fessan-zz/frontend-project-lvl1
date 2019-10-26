import { cons } from '@hexlet/pairs';
import random from '../random';
import { game } from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const newQuestion = random(2, 100);
  const answerGame = prime(random(2, 100)) ? 'yes' : 'no';

  return cons(newQuestion, answerGame);
};
export default () => game(gameDescription, createPrimegame);
