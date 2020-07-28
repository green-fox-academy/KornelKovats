import { Student } from './student';

class Teacher {
    answer() {
    let answer: string= "I'm answering a question";
    console.log(answer);

    }
    teach(student: Student){
        student.learn();
    }

}

export {Teacher};