"use strict";

const prompt = require("prompt-sync")(); //add () to call it

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

//1. Deposit some money
const deposit = () => {
  while (true) {
    //get the user's deposit
    const depositAmount = prompt("Enter a deposit amount: ");
    //convert the string depositAmount into a number
    const numDepositAmount = parseFloat(depositAmount);

    //chcks if number is not a number OR negative
    if (isNaN(numDepositAmount) || numDepositAmount <= 0) {
      console.log("invalid deposit amount, try again");
    } else {
      return numDepositAmount;
    }
  }
};

//2. Determine number of lines to bet ons
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter number of lines (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("invalid number of lines, try again");
    } else {
      return numberOfLines;
    }
  }
};

//3. Collect bet amount
const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter bet per line: ");
    const numberOfBets = parseFloat(bet);

    if (
      isNaN(numberOfBets) ||
      numberOfBets <= 0 ||
      numberOfBets > balance / lines
    ) {
      console.log("invalid bet, try again");
    } else {
      return numberOfBets;
    }
  }
};

//4. Spin the machine
const spinMachine = () => {
  const symbols = [];

  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol); //add however many symbols we have in array
    }
  }
  const reels = [[], [], []];
};

console.log(spinMachine());

// let balance = deposit(); //users starting balance
// const numberOfLines = getNumberOfLines();
// const bet = getBet(balance, numberOfLines);
