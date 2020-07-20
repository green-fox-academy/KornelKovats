//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending


function bubble(arr: number[]){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]>arr[j]) {
                let helper: number= arr[i];
                arr[i]= arr[j];
                arr[j] = helper;
            }
        }
    }
    return arr;
}


function advancedBubble(arr: number[], bool:boolean){
    if (bool){
        for (let i = 0; i < arr.length-1; i++) {
            for (let j = i+1; j < arr.length; j++) {
                if (arr[i]<arr[j]) {
                    let helper: number= arr[i];
                    arr[i]= arr[j];
                    arr[j] = helper;
                }
            }
        }
        return arr;
    } else {
        for (let i = 0; i < arr.length-1; i++) {
            for (let j = i+1; j < arr.length; j++) {
                if (arr[i]>arr[j]) {
                    let helper: number= arr[i];
                    arr[i]= arr[j];
                    arr[j] = helper;
                }
            }
        }
        return arr;
    }



}







//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]