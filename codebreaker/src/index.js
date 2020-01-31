import faker from "faker";
import _ from "lodash";
import chalk from "chalk";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
})

let tryCount = 0;

const question = _.split(faker.random.number(9999).toString(), "", 4);
// const question = _.split("1234", "", 4);

const guess = (number) => {
  tryCount++;
  const answer = _.split(number.toString(), "", 4);
  let correct_position = 0;
  let correct_number = 0;

  let unique = [... new Set(answer)];

  unique.forEach(an => {
    correct_number += question.filter(qn => qn === an).length;
  });

  correct_position = question.filter((qn, i) => answer[i] === qn).length;

  console.log(`CORRECT NUMBER:\t\t${correct_number}\nCORRECT POSITION:\t${correct_position}\n\n`);

  if (correct_position === 4 && correct_number === 4) {
    console.log(`Congratulation your answer is correct! "${question.join("")}" with try for ${tryCount} times`)
  } else {
    readline.question(chalk.red("Wrong!, try again:"), guess);
  }
}

(() => {
  console.log(chalk.bgWhiteBright("Hello, let's guess the number"));
  readline.question(chalk.bgBlue("Input number:"), guess);
})()