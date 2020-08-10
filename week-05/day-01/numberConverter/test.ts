import { test } from 'tape';
import numberConverter from './numberconverter';

test('is number equals string', (t) => {
  const thirteen = 'thirteen';
  t.equals(numberConverter(13), thirteen);
  t.end();
});

test('is number equals string with decimals', (t) => {
  const number = 'one hundred thirty-two';
  t.equals(numberConverter(132.9), number);
  t.end();
});

test('is number equals string with negativ numbers', (t) => {
  const number = 'minus one hundred thirty-two';
  t.equals(numberConverter(-132.9), number);
  t.end();
});
test('is number equals string with larger numbers', (t) => {
  const number = 'minus one thousand, thirty-two';
  t.equals(numberConverter(-1032.9), number);
  t.end();
});

test('is number equals string with larger numbers', (t) => {
  const number = 'minus two thousand, thirty-two';
  t.equals(numberConverter(-2032.9), number);
  t.end();
});
