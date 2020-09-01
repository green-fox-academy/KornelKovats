const mapWith = (array, callback) => {
  let output = [];

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.
  output = array.map((value) => callback(value));
  return output;
};

const addOne = (number) => number + 1;

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
// expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (word) => {
  const arrayOfWord = word.split('');
  let newWord = '';
  newWord += arrayOfWord.slice(0, 1).join('') + arrayOfWord.slice(2, arrayOfWord.length).join('');
  return newWord;
};
const removeEverySecondLetter = (word) => {
  const arrayOfWord = word.split('');
  let newWord = '';
  arrayOfWord.forEach((char, index) => {
    if (index % 2 === 0 || index === 0) {
      newWord += char;
    }
  });
  return newWord;
};

console.log(mapWith(words, removeSecondLetter));
console.log(mapWith(words, removeEverySecondLetter));
// expected result: ['mp','rdc', 'fle']
