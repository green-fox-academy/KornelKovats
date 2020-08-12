const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotateClockWise(matrix: number[][]):number[][] {
  const newMatrix: number[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[i][j] = matrix[j][i];
    }
    newMatrix[i].reverse();
  }
  return newMatrix;
}