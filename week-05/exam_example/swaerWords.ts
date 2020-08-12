import fs from "fs";

const inputWords = [
  "fuck",
  "bloody",
  "cock",
  "shit",
  "fucker",
  "fuckstick",
  "asshole",
  "dick",
  "piss",
  "cunt",
];

let readedArray = fs.readFileSync("./content.txt", "utf-8").split(" ");

let counter = 0;
readedArray.forEach((valueOriginal) => {
  inputWords.forEach((inputWord) => {
    if (valueOriginal.toLowerCase().includes(inputWord.toLowerCase())) {
      counter += 1;
    }
  });
});
console.log(counter);

readedArray = readedArray.map((valueOriginal) => {
  let valueNeedsToChange = valueOriginal;
  inputWords.forEach((inputWord) => {
    if (valueOriginal.toLowerCase().includes(inputWord.toLowerCase())) {
      valueNeedsToChange = valueOriginal
        .toLowerCase()
        .replace(inputWord.toLowerCase(), "");
    }
  });
  return valueNeedsToChange;
});

console.log(readedArray);
readedArray.forEach((value) => {
  if (value==="er") {
    console.log(value);
  }
});
