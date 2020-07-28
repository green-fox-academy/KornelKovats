const fs = require('fs');
// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

let read = (filename: string) => {

    return fs.readFileSync(filename, 'utf-8');

}


let copy = (readfile: string) => {
    return fs.writeFileSync('copy.txt', readfile);
};

copy(read('asd.txt'));



