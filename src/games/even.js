import { cons } from '@hexlet/pairs';
import random from '../random';
import { game } from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const even = (num) => num % 2 === 0;

const createEvenGame = () => {
  const question = random(0, 100);
  const answerGame = even(question) ? 'yes' : 'no';
  return cons(question, answerGame);
};

export default () => game(gameDescription, createEvenGame);
