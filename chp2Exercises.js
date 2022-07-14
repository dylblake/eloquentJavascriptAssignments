//Looping a triangle
const createRightTriangle = (height, char) => {
  for (let i = 1; i < height + 1; i++) {
    console.log(char.repeat(i));
  }
};

createRightTriangle(4, "T");

//FizzBuzz - How can I make the fizzbuzz appear w/o it being first?
//Maybe else if should be a solution here. This is what we tried & didn't work
const fizzBuzz = (numToCountTo) => {
  const outputArray = [];
  for (let j = 1; j < numToCountTo + 1; j++) {
    if (j % 5 === 0 && j % 3 === 0) {
      result = "FizzBuzz";
    } else if (j % 3 === 0) {
      result = "Fizz";
    } else if (j % 5 === 0) {
      result = "Buzz";
    } else {
      result = j;
    }
    outputArray.push(result);
  }
  return outputArray;
};

console.log(fizzBuzz(15));

//Chessboard
const chessboard = (numOfRows, symbol, numOfCols) => {
  for (let k = 1; k < numOfRows + 1; k++) {
    if (k % 2 === 0) {
      console.log((symbol + "  ").repeat(numOfCols));
    } else if (k % 2 === 1) {
      console.log(("  " + symbol).repeat(numOfCols));
    }
  }
};

chessboard(10, "#", 18);
