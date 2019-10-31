import { cons } from '@hexlet/pairs';
import random from '../random';
import playGame from '..';

const gameDescription = 'What number is missing in the progression?';
const lengthProgression = 10;

const gameCreatedProgression = () => {
  const firstValue = random(0, 50);
  const diff = random(1, 10);
  const hiddenValueIndex = random(0, lengthProgression - 1);
  let question = '';

  for (let i = 0; i < lengthProgression; i += 1) {
    if (i === hiddenValueIndex) {
      question = `${question} ..`;
    } else {
      question = `${question} ${firstValue + i * diff}`.trim();
    }
  }
  const gameAnswer = String(firstValue + diff * hiddenValueIndex);

  return cons(question, gameAnswer);
};

export default () => playGame(gameDescription, gameCreatedProgression);
