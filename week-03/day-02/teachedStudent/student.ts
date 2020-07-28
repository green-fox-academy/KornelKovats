import { Teacher } from './teacher';
class Student {
    learn(){
        let newThingsLearnt: string[] = ['I learned how CPU works by Teacher',
            "I learned how wolfs get pregnant bz the Teacher", 'I learned knife usage bz Teacher'];

        console.log(newThingsLearnt[this.getRandomInt(3)]);

    }
    getRandomInt(max:number ):number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    question(teacher: Teacher){
    teacher.answer();

    }
}
export {Student};

let student = new Student();
let teacher = new Teacher();

student.learn();
teacher.answer();