import { cons } from '@hexlet/pairs';
import random from '../random';
import playGame from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameCreatedPrime = () => {
  const question = random(2, 100);
  const gameAnswer = isPrime(random(2, 100)) ? 'yes' : 'no';

  return cons(question, gameAnswer);
};
export default () => playGame(gameDescription, gameCreatedPrime);
