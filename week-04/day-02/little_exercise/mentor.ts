import { Person } from './person';

class Mentor extends Person {
  private level:string;

  constructor(name:string = 'Jane Doe', age:number = 30, gender:string = 'female',level:string= 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  public introduce():void{
    console.log(`Hi, I'm name, a age year old gender level mentor.`);
  }
  public getGoal():void {
      console.log('My goal is: Educate brilliant junior software developers.');
  }

}
