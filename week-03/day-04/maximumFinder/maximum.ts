// Write a function that finds the largest element of an array using recursion.

function maximumFinder(arr: number[]) {
  if (arr.length == 2) {
    if (arr[0] > arr[1]) {
      return arr[0];
    }
    return arr[1];
  }

  if (arr[arr.length-1] > arr[arr.length - 2]) {
    arr[arr.length - 2] = arr[arr.length-1];
    return maximumFinder(arr.slice(0, arr.length - 1));
  }
  return maximumFinder(arr.slice(0, arr.length - 1));
}

console.log(maximumFinder([2, 46, 7, 32, 45, 6, 8, 83, 2, 33, 4, 6, 77]));
