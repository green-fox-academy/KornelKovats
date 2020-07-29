class Sum {

    summingElements(list: number[]):number{
        let sum = list.reduce(function (value) {
                return sum + value;
        });
        return sum;
    }
}

export {Sum}