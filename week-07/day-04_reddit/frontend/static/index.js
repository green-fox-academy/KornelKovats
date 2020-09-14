function reqListener() {
  const posts = JSON.parse((this.responseText));
createPosts({posts: posts});
}
function createPosts(posts) {
  const rawTemplate = document.getElementById('postsTemplate').innerHTML;
  const compiledTemplate = Handlebars.compile(rawTemplate);
  const myHTML = compiledTemplate(posts);

  const posts_body = document.querySelector('.posts_body');
  posts_body.innerHTML = myHTML;
}
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', reqListener);
xhr.open('GET', 'http://localhost:3000/api/posts', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('username', 'Kornel');
xhr.send();


