import { Person } from './person';

class Sponsor extends Person {
  private company: string;

  private hiredStudents: number;

  constructor(name = 'Jane Doe', age = 30, gender = 'female', company = 'Google', hiredStudents = 0) {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = hiredStudents;
  }

  // eslint-disable-next-line class-methods-use-this
  public introduce():void {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  public hire():void{
    this.hiredStudents += 1;
  }

  public getGoal():void{
    console.log('My goal is: Hire brilliant junior software developers.');
  }
}
export {Sponsor}