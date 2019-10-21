import { cons } from '@hexlet/pairs';
import random from '../random';
import { game } from '..';

const gameDesc = 'What is the result of the expression?';

const operators = '+-*';

const calc = (x, y, operator) => {
  if (operator === '+') {
    return x + y;
  }
  if (operator === '-') {
    return x - y;
  }
  if (operator === '*') {
    return x * y;
  }
  return false;
};

const createCalcGame = () => {
  const x = random(0, 100);
  const y = random(0, 100);
  const operator = operators[random(0, 2)];

  const createQuestion = `${x} ${operator} ${y}`;
  const answerGame = String(calc(x, y, operator));
  return cons(createQuestion, answerGame);
};
export default () => game(gameDesc, createCalcGame);
