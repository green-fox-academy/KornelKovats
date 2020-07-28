class BlogPost {
    authorName: string;
    title: string;
    text: string;
    publicationDate: Date;
    constructor(authorName: string,title: string,text: string,publicationDate: Date){
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    }
}

let blogPost1 = new BlogPost('John Doe','Lorem Ipsum','Lorem ipsum dolor sit amet.',new Date('2000.05.04'));

console.log(blogPost1);












class BlogPost2 {
    authorName: string;
    title: string;
    text: string;
    publicationDate: Date;
    constructor(authorName: string,title: string,text: string, publicationDate: Date){
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = new Date('2000.05.04');
    }
}

let blogPost2 = new BlogPost2('John Doe','Lorem Ipsum','Lorem ipsum dolor sit amet.',new Date());

console.log(blogPost2);





class BlogPost3 {
    authorName: string;
    title: string;
    text: string;
    publicationDate: Date = new Date('2000.05.04');
    constructor(authorName: string,title: string,text: string, publicationDate: Date){
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = new Date('2002.05.04');
    }
}

let blogPost3 = new BlogPost3('John Doe','Lorem Ipsum','Lorem ipsum dolor sit amet.',new Date);


export{BlogPost}
console.log(blogPost3);