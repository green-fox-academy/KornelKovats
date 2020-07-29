class Sum {

    summingElements(list: number[]=[0]):number{

        let sum = list.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
        },0);
        return sum;
    }
}

export {Sum}