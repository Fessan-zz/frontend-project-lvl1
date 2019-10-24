import { cons } from '@hexlet/pairs';
import random from '../random';
import { game } from '..';

const gameDescription = 'What is the result of the expression?';

const operators = '+-*';

const calculator = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;

    case '-':
      return x - y;

    default:
      return x * y;
  }
};

const createCalcGame = () => {
  const x = random(0, 100);
  const y = random(0, 100);
  const operator = operators[random(0, 2)];

  const newQuestion = `${x} ${operator} ${y}`;
  const answerGame = String(calculator(x, y, operator));
  return cons(newQuestion, answerGame);
};
export default () => game(gameDescription, createCalcGame);
