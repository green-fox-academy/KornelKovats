import { test } from 'tape';
import isAnagram from './anagram';

test('is two stringA is anagram of stringB', (t) => {
  const stringA = 'kakak';
  const stringB = 'aakkk';
  const result = true;
  t.equal(isAnagram(stringA, stringB), result);
  t.end();
});
test('is two stringA is anagram of stringB with Capital', (t) => {
  const stringA = 'kakak';
  const stringB = 'AAKKK';
  const result = true;
  t.equal(isAnagram(stringA, stringB), result);
  t.end();
});
test('is two stringA is not anagram of stringB with Capital', (t) => {
  const stringA = 'kakak';
  const stringB = 'AAKKKK';
  const result = false;
  t.equal(isAnagram(stringA, stringB), result);
  t.end();
});

test('is two stringA is not anagram of stringB when stringB is an empty string', (t) => {
  const stringA = 'kakak';
  const stringB = '';
  const result = false;
  t.equal(isAnagram(stringA, stringB), result);
  t.end();
});
