import { cons } from '@hexlet/pairs';
import random from '../random';
import { game } from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findDivisor = (x, y) => {
  const iter = (divisor) => {
    if (x % divisor === 0 && y % divisor === 0) {
      return divisor;
    }
    return iter(divisor - 1);
  };
  return iter(Math.min(x, y));
};

const createGcdGame = () => {
  const x = random(0, 100);
  const y = random(0, 100);

  const newQuestion = `${x} ${y}`;
  const answerGame = String(findDivisor(x, y));
  return cons(newQuestion, answerGame);
};
export default () => game(gameDescription, createGcdGame);
