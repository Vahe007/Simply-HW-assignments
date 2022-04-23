//Exersice 2.1
const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
const matrix2 = [
  [1, 2, 3],
  [4, 5, []],
  [7, 8, 9],
  [null, 11, 12],
  [13, 14, NaN],
];

const rotateby90degree = function (matrix) {
  let res = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let temp = [];
    for (let j = 0; j < matrix.length; j++) {
      temp.push(matrix[matrix.length - 1 - j][i]);
    }
    res.push(temp);
  }
  return res;
};

const calculateRotations = function (deg) {
  if (deg % 90 !== 0) {
    throw new Error("Degree should be divsible by 90");
  }
  deg = (deg % 360) / 90;
  deg += deg < 0 ? 4 : 0;
  return deg;
};

const rotate = function (matrix, deg) {
  const num = calculateRotations(deg);
  for (let i = 0; i < num; i++) {
    matrix = rotateby90degree(matrix);
  }
  return matrix;
};




//Exersice 2.2

//Only square matrices have diagonals, that's why I have generated 2 square matrices to test the code
const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const mat2 = [
  [1, 2, 3, 89],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];


const rotateWithoutDiagonalBy90Degree = (matrix) => {
  if (matrix.length !== matrix[0].length) {
    throw new Error("The given matrix should be square");
  }
  const newMatrix = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i !== j && j !== matrix[i].length - 1 - i) {
        newMatrix[i][j] = matrix[matrix.length - 1 - j][i];
      }
    }
  }
  matrix = newMatrix;
  return newMatrix;
};

const rotateWithoutDiagonal = (matrix, deg) => {
  const num = calculateRotations(deg);
  return Array.from({ length: num }).reduce((acc) => {
    return rotateWithoutDiagonalBy90Degree(acc);
  }, matrix);
};

console.log(rotateWithoutDiagonal(mat2, 90));




