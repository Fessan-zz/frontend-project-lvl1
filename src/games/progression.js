import { cons } from '@hexlet/pairs';
import random from '../random';
import { game } from '..';

const gameDesc = 'What number is missing in the progression?';
const lengthProg = 10;

const createProgGame = () => {
  const oneNumber = random(0, 50);
  const diff = random(1, 10);
  const hiddenNumber = random(0, 9);
  let prog = '';

  for (let i = 0; i < lengthProg; i += 1) {
    if (i === hiddenNumber) {
      prog = `${prog} ..`;
    } else {
      prog = `${prog} ${oneNumber + i * diff}`;
    }
  }
  const answerGame = `${oneNumber + diff * hiddenNumber}`;

  return cons(prog, answerGame);
};

export default () => game(gameDesc, createProgGame);
