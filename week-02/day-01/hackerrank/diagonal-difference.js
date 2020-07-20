function diagonalDifference(arr) {
    // Write your code here
    let length = arr.length
    let firstDiagonal = 0;
    let secondDiagonal= 0;
    let helper = 0;
    for (let i = 0; i < length; i++) {
        let reversed = arr[i].slice().reverse();
        console.log(arr[i].slice());
        //arr[i] = [];
        //console.log(reversed);
        for (let j = 0; j < length; j++) {
            if(i==j){
                firstDiagonal+= arr[i][j];
                secondDiagonal+=reversed[i];
            }
        }

    }

    return Math.abs(firstDiagonal-secondDiagonal);
}