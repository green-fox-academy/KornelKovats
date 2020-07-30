// Given a non-negative integer n, return the sum of its digits recursively (without loops).

function sumDigits(number: number) {
  if (number < 10) {
    return number;
  }
  return sumDigits(Math.floor(number / 10)) + (number % 10);
}

console.log(sumDigits(83128));
