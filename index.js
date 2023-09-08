/**
 * B-I-N-G-O
 *
 * A Bingo card contain 25 squares arranged in a 5x5 grid (five columns
 * and five rows). Each space in the grid contains a number between 1
 * and 75. The center space is marked "FREE" and is automatically filled.
 *
 * As the game is played, numbers are drawn. If the player's card has
 * that number, that space on the grid is filled.
 *
 * A player wins BINGO by completing a row, column, or diagonal of filled
 * spaces.
 *
 * Your job is to complete the function that takes a bingo card and array
 * of drawn numbers and return 'true' if that card has achieved a win.
 *
 * A bingo card will be 25 element array. With the string 'FREE' as the
 * center element (index 12). Although developers are unscrupulous, they
 * will pass valid data to your function.
 */

function checkForBingo (bingoCard, drawnNumbers) {
 //first I will start by creating a grid array that will contain 5 arrays
 //grid array will be used to check rows, columns and diagonal lines to see
 //if there's any match! 

 let grid = [];
 for( let i=0; i<5; i++){
  // using slice to divide bingoCard array into 5 arrays with 5 elements in each array
  grid.push(bingoCard.slice(i * 5,(i + 1) * 5 ))
 }

 //grid array now has 5 separate arrays representing rows of bingo card

 //now we will check rows, columns and diagonals of our bingo card to see
 //if there's any match with drawnNumbers

 for(let i=0; i<5; i++){

  //let's check rows first by looping through grid array.
  //each element inside the grid array represent a row of our bingo card
  //we will use 'every' method to see if our drawnNumbers complete a row!

  //for visual representation of this code, please refer to
  //bingo_explained-02.jpg 
  if(grid[i].every((cell) => drawnNumbers.includes(cell) || cell === 'FREE')){
    return true;
  }

  //then, we will check columns of grid array.
  //for visual representation of this code, please refer to
  //bingo_explained-03.jpg
  if(grid.every((row)=> drawnNumbers.includes(row[i]) || row[i] === 'FREE' )){
    return true;
  }
 }

 //finally we will check diagonal lines.
 //keep in mind that we have 2 diagonal lines.
 //for this, I will make two arrays to contain elements of diagonal lines.
 //this looks tricky at first but you can see a pattern in creating a diagonal line.
 //As long as you use the index of the row to pick element from that row,
 //you can easily create a diagonal line.
 //for example, grid[0][0], grid[1][1] and so on will create the first diagonal line

 //please see bingo_explained-04.jpg for visual explanation :)
 let diagonal = [];
 let antiDiagonal = [];

 for(let i=0; i<5; i++){
  diagonal.push(grid[i][i])
  antiDiagonal.push(grid[i][ 4-i ])
 }

 //checking diagonal line
 if(diagonal.every((cell) => drawnNumbers.includes(cell) || cell === 'FREE')){
  return true;
 }
//checking anti (reverse) diagonal line
 if(antiDiagonal.every((cell) => drawnNumbers.includes(cell) || cell === 'FREE')){
  return true;
 }

 //if there's no match, return false

 return false;

}

module.exports = checkForBingo;

// here are some samples

// this should return true with diagonal + free
checkForBingo(
  [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
  ],
  [
    8, 24, 53, 72
  ]
);

// this should return false
checkForBingo(
  [
   8, 29, 35, 54, 65,
   13, 24, 44, 48, 67,
   9, 21, 'FREE', 59, 63,
   7, 19, 34, 53, 61,
   1, 20, 33, 46, 72
  ],
  [
    1, 33, 53, 65, 29, 75
  ]
);

//additiona test that will return true

//anti diagonal test
checkForBingo(
  [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
  ],
  [
    65, 48, 'FREE', 19, 1
  ]
);

//middle column test
checkForBingo(
  [
   8, 29, 35, 54, 65,
   13, 24, 44, 48, 67,
   9, 21, 'FREE', 59, 63,
   7, 19, 34, 53, 61,
   1, 20, 33, 46, 72
  ],
  [
    35,44,'FREE', 34,33
  ]
);

