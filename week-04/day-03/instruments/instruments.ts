// eslint-disable-next-line import/prefer-default-export
export abstract class Instrument {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract play ():void;
}
