/* eslint-disable class-methods-use-this */
const test = require('tape');

class Apple {
  getApple():string {
    // eslint-disable-next-line quotes
    return `apple`;
  }
}
const apple = new Apple();
test('apple is equals?: ', (t) => {
  t.equals('apple', apple.getApple());
  t.end();
});
