import {Anagramma} from "./anagram";
let test = require('tape');

let anagram = new Anagramma();


test('Is Anagramma: ',t=>{
    t.equals(anagram.isAnagramma('asd','dsa'),true);
    t.end();
});

