import { Anagramma } from './anagram';

const test = require('tape');

const anagram = new Anagramma();

test('Is Anagramma: ', (t) => {
  t.equals(anagram.isAnagramma('asd', 'dsa'), true);
  t.end();
});
