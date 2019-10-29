import { cons } from '@hexlet/pairs';
import random from '../random';
import playGame from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const gameCreateEven = () => {
  const question = random(0, 100);
  const gameAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, gameAnswer);
};

export default () => playGame(gameDescription, gameCreateEven);
