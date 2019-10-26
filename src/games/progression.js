import { cons } from '@hexlet/pairs';
import random from '../random';
import { game } from '..';

const gameDescription = 'What number is missing in the progression?';
const lengthProgression = 10;

const createProgGame = () => {
  const firstValue = random(0, 50);
  const diff = random(1, 10);
  const hiddenIndexValue = random(0, lengthProgression - 1);
  let progression = '';

  for (let i = 0; i < lengthProgression; i += 1) {
    if (i === hiddenIndexValue) {
      progression = `${progression} ..`;
    } else {
      progression = `${progression} ${firstValue + i * diff}`.trim();
    }
  }
  const answerGame = String(firstValue + diff * hiddenIndexValue);

  return cons(progression, answerGame);
};

export default () => game(gameDescription, createProgGame);
