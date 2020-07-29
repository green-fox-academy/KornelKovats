class Fibonacci {
    getFiboValue(index:number): number{
        let array :number[]= [];
        for (let i = 0; i < index; i++) {
            if (i ==0||i==1) {
                array.push(1)
            }else{
                array.push(array[i-1]+array[i-2]);
            }
        }
        if (index==0||index<0){
            return 0
        } else {
            return array[index-1];
        }

    }
}
let fibo = new Fibonacci();

console.log(fibo.getFiboValue(11));

export{Fibonacci}