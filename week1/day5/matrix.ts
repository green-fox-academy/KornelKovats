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

let twoDemMatrix: number[][] = [
    [1,2,3],
    [4,5,6],
    []
];

twoDemMatrix[2][0]= 22;


function matrixCreater(size: number){
    let matrix: number[][]=[];
    for (let i = 0; i < size; i++) {
        matrix[i]=[];
        //let helper: number[] = [];
        for (let j = 0; j < size; j++) {

            if (i == j) {
                //matrix[i][j]=[];
                //matrix[i][j]=;

                matrix[i][j]= 1;
            }
            else {
                matrix[i][j]= 0;
            }

        }
    }
    console.log(matrix.reverse());
}
matrixCreater(10);