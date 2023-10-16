const spiralOrder = (matrix) => {
  if (!matrix.length) return [];

  const result = [];
  let topRow = 0,
    bottomRow = matrix.length - 1,
    leftCol = 0,
    rightCol = matrix[0].length - 1;

  while (topRow <= bottomRow && leftCol <= rightCol) {
    // Traverse right
    for (let col = leftCol; col <= rightCol; col++) {
      result.push(matrix[topRow][col]);
    }
    topRow++;

    // Traverse down
    for (let row = topRow; row <= bottomRow; row++) {
      result.push(matrix[row][rightCol]);
    }
    rightCol--;

    // Traverse left
    if (topRow <= bottomRow) {
      for (let col = rightCol; col >= leftCol; col--) {
        result.push(matrix[bottomRow][col]);
      }
      bottomRow--;
    }

    // Traverse up
    if (leftCol <= rightCol) {
      for (let row = bottomRow; row >= topRow; row--) {
        result.push(matrix[row][leftCol]);
      }
      leftCol++;
    }
  }

  return result;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrder(matrix));
