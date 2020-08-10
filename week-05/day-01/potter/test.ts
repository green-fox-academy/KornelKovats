import test from 'tape';
import getBooksPrice from './potter';

test('price of a copy of any of the five books', (t) => {
  const result = 8;
  t.equal(getBooksPrice([1, 0, 0, 0, 0]), result);
  t.end();
});
test('price of two different books', (t) => {
  const result = (8 + 8) * (0.95);
  t.equal(getBooksPrice([1, 1, 0, 0, 0]), result);
  t.end();
});
test('price of two same books', (t) => {
  const result = (8 + 8);
  t.equal(getBooksPrice([2, 0, 0, 0, 0]), result);
  t.end();
});
test('price of three different books', (t) => {
  const result = (8 + 8 + 8) * 0.9;
  t.equal(getBooksPrice([1, 1, 1, 0, 0]), result);
  t.end();
});
test('price of four different books', (t) => {
  const result = (8 + 8 + 8 + 8) * 0.8;
  t.equal(getBooksPrice([1, 1, 1, 1, 0]), result);
  t.end();
});
test('price of five different books', (t) => {
  const result = (8 + 8 + 8 + 8 + 8) * 0.75;
  t.equal(getBooksPrice([1, 1, 1, 1, 1]), result);
  t.end();
});

test('price of five different books', (t) => {
  const result = (8 * 8) * 0.6;
  t.equal(getBooksPrice([2, 2, 2, 1, 1]), result);
  t.end();
});
