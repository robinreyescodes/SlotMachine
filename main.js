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
  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};

//5. transpose the matrix
//[[D, C, C], [B, A, C], [C, D, B]]
//needs to be...
// D B C
// C A D
// C C B
const transposeMatrix = (reels) => {
  let transposed = [];
  let i = 0;
  while (i < reels.length) {
    let subArr = [];
    for (let j = 0; j < reels.length; j++) {
      subArr.push(reels[j][i]);
    }
    i++;
    transposed.push(subArr);
  }
  return transposed;
};

//6. Print our rows
const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != rows.length - 1) rowString += " | ";
    }
    console.log(rowString);
  }
};

let balance = deposit(); //users starting balance
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spinMachine();
const transposed = transposeMatrix(reels);
printRows(transposed);
