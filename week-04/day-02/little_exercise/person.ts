class Person {
  protected name: string;

  protected age: number;

  protected gender: string;

  constructor(name:string, age:number, gender:string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  private Person():void{
    this.name = 'Jane Doe';
    this.age = 30;
    this.gender = 'female';
  }

  private introduce():void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  private getGoal():void{
    console.log('My goal is: Live for the moment!');
  }
}
export{Person};