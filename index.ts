#! /user/bin/env node 

import inquirer from "inquirer";
// 1) computer will generate a random number

// 2) user input for guessing number

// 3)compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to Number Guessing Game:");
const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1 - 10 :",
  },
]);
if (answers.userGuessedNumber === randomNumber )
console.log("Your answer is correct" );
if (answers.userGuessedNumber > 10)
  console.log("You have entered wrong number! Please enter number between 1- 10");
if (answers.userGuessedNumber === 0)
  console.log("You have entered wrong number! Please enter number between 1- 10");
else
console.log("Sorry try again");
