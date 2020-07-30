// Find the greatest common divisor of two numbers using recursion.

function greatestDivisor(x:number, y:number) {
  if (y === 0) {
    return x;
  }
  return greatestDivisor(y, (x % y));
}

console.log(greatestDivisor(256,102));