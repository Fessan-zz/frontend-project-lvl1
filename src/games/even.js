import { cons } from '@hexlet/pairs';
import random from '../random';
import { game } from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const even = (num) => num % 2 === 0;

const createEvenGame = () => {
  const newQuestion = random(0, 100);
  const answerGame = even(newQuestion) ? 'yes' : 'no';
  return cons(newQuestion, answerGame);
};

export default () => game(gameDescription, createEvenGame);
