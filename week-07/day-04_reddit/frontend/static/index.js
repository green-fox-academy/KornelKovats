function reqListener() {
  const data = JSON.parse((this.responseText));

  const table = document.querySelector('table');
  data.forEach((element) => {
    const row = document.createElement('tr');
    row.style.width = '700px';
    const score = document.createElement('td');
    const title = document.createElement('td');
    score.innerText = element.score;
    title.innerText = element.title;
    row.appendChild(score);
    row.appendChild(title);
    table.appendChild(row);

  });
  console.log(data);
}

const xhr = new XMLHttpRequest();

xhr.addEventListener('load', reqListener);

xhr.open('GET', 'http://localhost:3000/api/posts', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('username', 'Kornel');
xhr.send();
