function reqListener() {
  const data = JSON.parse((this.responseText));

  const table = document.querySelector('table');

  
  data.forEach((element) => {
    const newRow = document.createElement('tr');
    newRow.style.width = '800px';
    const title = document.createElement('td');
    const author = document.createElement('td');
    const category = document.createElement('td');
    const publisherName = document.createElement('td');
    const price = document.createElement('td');
    title.innerHTML = element.book_name;
    author.innerHTML = element.aut_name;
    category.innerHTML = element.cate_descrip;
    publisherName.innerHTML = element.pub_name;
    price.innerHTML = element.book_price;
    newRow.appendChild(title);
    newRow.appendChild(author);
    newRow.appendChild(category);
    newRow.appendChild(publisherName);
    newRow.appendChild(price);

    table.appendChild(newRow);
  });
  console.log(data);
}

const xhr = new XMLHttpRequest();
xhr.addEventListener('load', reqListener);
xhr.open('GET', 'http://localhost:3000/api/allbook');
xhr.send();
