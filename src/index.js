import readlineSync from 'readline-sync';


export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const brainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const counter = 3;

  for (let i = 1; i <= counter; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && randomNumber % 2 === 0) {
      console.log('Correct!');
    } else if (answer === 'no' && randomNumber % 2 !== 0) {
      console.log('Correct!');
    } else if (answer === 'yes' && randomNumber % 2 !== 0) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      break;
    } else if (answer === 'no' && randomNumber % 2 === 0) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      break;
    } else if (answer !== 'no' || answer !== 'yes') {
      console.log('Allowed to answer only yes or no');
      break;
    }
    if (i === counter) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
