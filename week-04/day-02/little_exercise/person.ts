class Person {
  protected name: string;

  protected age: number;

  protected gender: string;

  constructor(name:string = 'Jane Doe', age:number = 30, gender:string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  private introduce():void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  private getGoal():void{
    console.log('My goal is: Live for the moment!');
  }
}
export { Person };
