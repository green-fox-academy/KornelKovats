'use-strict';

function numberAdder(number: number) {
  return number === 1 ? 1 : number + numberAdder(number - 1);
}

console.log(numberAdder(3));
