function reqListener() {
  const data = JSON.parse((this.responseText));

  const body = document.querySelector('body');
  data.forEach(element => {
    let newdiv = document.createElement('div');
    newdiv.innerHTML = element.book_name;
    body.appendChild(newdiv);
  });
  console.log(data);
}

const xhr = new XMLHttpRequest();
xhr.addEventListener('load', reqListener);
xhr.open('GET', 'http://localhost:3000/names');
xhr.send();
