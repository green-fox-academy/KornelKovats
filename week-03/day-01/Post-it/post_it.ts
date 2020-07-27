class Post_it {
     backGroundColor: string;
     text: string;
     textColor: string;
     constructor(backgroungColor: string,text: string, textColor:string){
         this.backGroundColor = backgroungColor;
         this.text = text;
         this.textColor = textColor;
     }
    
}

let orange = new Post_it('orange','Idea 1', 'blue');
let pink = new Post_it('pink','Awesome', 'black');
let yellow = new Post_it('yellow','Superb', 'green');
console.log(orange);

console.log(pink);

console.log(yellow);