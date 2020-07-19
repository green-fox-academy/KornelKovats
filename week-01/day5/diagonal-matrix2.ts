// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array



let m_Length: number = 7;


let matrix: number[][]= [];

for (let i = 0; i < m_Length; i++) {
    matrix[i] = [];
    for (let j = 0; j < m_Length; j++) {
        if (i==j){
            matrix[i][j]= 1;
        } else {
            matrix[i][j]= 0
        }
    }
    matrix[i].reverse();
}

console.log(matrix);

