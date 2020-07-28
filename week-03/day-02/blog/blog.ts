import {BlogPost} from '../../day-01/BlogPost/BlogPost'


class Blog {
    blogpost: BlogPost[] = [];


    add(authorName: string, title: string, text: string, date: Date) {
        this.blogpost[this.blogpost.length] = new BlogPost(authorName, title, text, date);
    }

    delete(indexFordelete: number) {
        this.blogpost = this.blogpost.map(function (value, index) {
            if (index != indexFordelete) {
                return value;
            }
        })
    }
    update(indexForUpdate: number, blogPost: BlogPost) {
        this.blogpost = this.blogpost.map(function (value, index) {
            if (index == indexForUpdate) {
                return blogPost;
            } else {
                return value;
            }
        })
    }

}

let blog: Blog = new Blog();

blog.add('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', new Date('2000.05.04'));
blog.add('Kovats', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', new Date('2000.05.04'));
blog.add('Kovats', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', new Date('2000.05.04'));
blog.add('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', new Date('2000.05.04'));



blog.delete(3);

blog.update(0,new BlogPost('Yasmin','Lorem Ipsum', 'Lorem ipsum dolor sit amet.', new Date('2000.05.04')));

console.log(blog);
