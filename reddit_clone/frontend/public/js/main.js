// get all posts
const getPosts = document.querySelector('.posts_body');
let userName = localStorage.username;
// console.log(getPosts);

function reqListener() {
  const posts = JSON.parse((this.responseText));
  // console.log(posts);
  posts.forEach((element) => {
    const currDate = new Date();
    const dateParts = element.date_time.split('-');
    const postDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0, 2));
    const diffDays = dateDiffInDays(postDate, currDate);
    // console.log(diffDays);
    element.date_time = diffDays;
    if (element.owner === null) {
      element.owner = 'anonymous';
    }
  });
  createPosts({ posts });
}
function loadPosts() {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', reqListener);
  xhr.open('GET', 'http://localhost:3000/api/posts');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('username', userName);
  xhr.send();
}
loadPosts();

function upVoting(element) {
  const { id } = element.dataset;
  console.log(element.dataset.id);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    // In local files, status is 0 upon success in Mozilla Firefox
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const { status } = xhr;
      if (status === 0 || (status >= 200 && status < 400)) {
        // The request has been completed successfully
        loadPosts();
        console.log(xhr.responseText);
      } else {
        // Oh no! There has been an error with the request!
      }
    }
  };
  xhr.open('PUT', `http://localhost:3000/api/posts/${id}/upvote`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('username', userName);
  xhr.send();
}
function downVoting(element) {
  const { id } = element.dataset;
  console.log(element.dataset.id);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    // In local files, status is 0 upon success in Mozilla Firefox
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const { status } = xhr;
      if (status === 0 || (status >= 200 && status < 400)) {
        // The request has been completed successfully
        loadPosts();
        console.log(xhr.responseText);
      } else {
        // Oh no! There has been an error with the request!
      }
    }
  };
  xhr.open('PUT', `http://localhost:3000/api/posts/${id}/downvote`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('username', userName);
  xhr.send();
}

getPosts.addEventListener('click', (event) => {
  const classArray = event.target.className.split(' ');
  if (classArray[0] === 'upvote') {
    upVoting(event.target);
  } else if (classArray[0] === 'downvote') {
    downVoting(event.target);
  }
});

function createPosts(posts) {
  const rawTemplate = document.getElementById('postsTemplate').innerHTML;
  const compiledTemplate = Handlebars.compile(rawTemplate);
  const myHTML = compiledTemplate(posts);

  const posts_body = document.querySelector('.posts_body');
  posts_body.innerHTML = myHTML;
}
function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
