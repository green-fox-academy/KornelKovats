import { Printable } from './interface_printable';
// eslint-disable-next-line import/prefer-default-export
export class Todo implements Printable {
  protected task: string;

  protected priority: string;

  protected done: boolean;

  constructor(task='Nothing to do', priority='Low', done=false) {
    this.task = task;
    this.priority = priority;
    this.done = done;
  }

  printAllFields() {
    console.log(`Task: ${this.task} | Priority: ${this.priority} | Done: ${this.done}`);
  }
}
