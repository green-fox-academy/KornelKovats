import Animal from "./animal";

export default class Cat extends Animal {
  /**
   *
   */
  constructor(healCost = Math.floor(Math.random() * 6), ownerName = 'Cat') {
    super(healCost, ownerName);
    
  }

  public randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

let macskosz = new Cat();

console.log(macskosz);
