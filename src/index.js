import readlineSync from 'readline-sync';

export const greeting = console.log('Welcome to the Brain Games!');
export const actual = readlineSync.question('May I have your name? ');
export const answer = console.log(`Hello, ${actual}!`);
