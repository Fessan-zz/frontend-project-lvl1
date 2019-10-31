import { cons } from '@hexlet/pairs';
import random from '../random';
import playGame from '..';

const gameDescription = 'What is the result of the expression?';

const operators = '+-*';

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;

    case '-':
      return x - y;

    case '*':
      return x * y;

    default:
      return null;
  }
};

const gameCreatedСalculator = () => {
  const x = random(0, 100);
  const y = random(0, 100);
  const operator = operators[random(0, operators.length - 1)];

  const question = `${x} ${operator} ${y}`;
  const gameAnswer = String(calculate(x, y, operator));
  return cons(question, gameAnswer);
};
export default () => playGame(gameDescription, gameCreatedСalculator);
