import { cons } from '@hexlet/pairs';
import random from '../random';
import { game } from '..';

const gameDesc = 'Answer "yes" if the number is even, otherwise answer "no".';
const even = (num) => num % 2 === 0;

const createEvenGame = () => {
  const createQuestion = random(0, 100);
  const answerGame = even(createQuestion) ? 'yes' : 'no';
  return cons(createQuestion, answerGame);
};

export default () => game(gameDesc, createEvenGame);
