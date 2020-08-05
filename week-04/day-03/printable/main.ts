import { Domino } from './domino';
import { Todo } from './todo';

function main() {
  const dominoes:Domino[] = [];
  const todos:Todo[] = [];

  dominoes.push(new Domino(5, 3));
  dominoes.push(new Domino(4, 8));
  dominoes.push(new Domino(7, 7));
  dominoes.push(new Domino(5, 5));
  dominoes.push(new Domino());

  todos.push(new Todo());
  todos.push(new Todo());
  todos.push(new Todo());
  todos.push(new Todo());
  todos.push(new Todo());

  // eslint-disable-next-line no-restricted-syntax
  for (const domino of dominoes) {
    domino.printAllFields();
  }
}
main();