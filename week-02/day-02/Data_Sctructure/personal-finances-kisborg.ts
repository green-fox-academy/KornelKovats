let expenses: number[] = [500,1000,1250,175,800,120];

let totalSpend = (arr: number[]): number => {
    return arr.reduce((acc, item) =>{
        acc+=item;
        return acc;
    },0)
}

console.log(totalSpend(expenses));