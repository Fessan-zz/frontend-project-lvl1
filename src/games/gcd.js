import { cons } from '@hexlet/pairs';
import random from '../random';
import playGame from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  const iter = (divisor) => {
    if (x % divisor === 0 && y % divisor === 0) {
      return divisor;
    }
    return iter(divisor - 1);
  };
  return iter(Math.min(x, y));
};

const gameCreateGcd = () => {
  const x = random(0, 100);
  const y = random(0, 100);

  const question = `${x} ${y}`;
  const gameAnswer = String(findGcd(x, y));
  return cons(question, gameAnswer);
};
export default () => playGame(gameDescription, gameCreateGcd);
