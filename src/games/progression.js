import { cons } from '@hexlet/pairs';
import random from '../random';
import { game } from '..';

const gameDescription = 'What number is missing in the progression?';
const lengthProgression = 10;
const setInterval = 9;

const createProgGame = () => {
  const oneValue = random(0, 50);
  const diff = random(1, 10);
  const hiddenValue = random(0, setInterval);
  let progression = '';

  for (let i = 0; i < lengthProgression; i += 1) {
    if (i === hiddenValue) {
      progression = `${progression} ..`;
    } else {
      progression = `${progression} ${oneValue + i * diff}`.trim();
    }
  }
  const answerGame = String(oneValue + diff * hiddenValue);

  return cons(progression, answerGame);
};

export default () => game(gameDescription, createProgGame);
