function plusMinus(arr) {
    let plus = 0;
    let minus = 0;
    let zero = 0;
    let all = arr.length;
    arr.forEach(function(value,index,arr){
        if(value==0){
            zero++;
        }else if(value>0){
            plus++;
        }else {
            minus++
        }
    })
    console.log(plus/all);
    console.log(minus/all);
    console.log(zero/all);
}
