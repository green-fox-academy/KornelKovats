// eslint-disable-next-line import/prefer-default-export
export abstract class Animal {
  protected name: string;

  protected age: number;

  /**
   *
   */
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  abstract getName(): void;

  abstract breed(): void;
}
