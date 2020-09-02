function reqListener() {
  const data = JSON.parse((this.responseText));
  // select the table which is in the HTML
  const table = document.querySelector('table');
  // clear this table content in case if reselecting the elements
  table.innerHTML = '';
  // create the firstRow titles and add to the table
  const filterNameROW = document.createElement('tr');
  table.appendChild(filterNameROW);
  const titleName = document.createElement('td');
  const authorName = document.createElement('td');
  const categoryName = document.createElement('td');
  const publisherName = document.createElement('td');
  const priceName = document.createElement('td');
  filterNameROW.appendChild(titleName);
  filterNameROW.appendChild(authorName);
  filterNameROW.appendChild(categoryName);
  filterNameROW.appendChild(publisherName);
  filterNameROW.appendChild(priceName);
  titleName.innerHTML = 'Title:';
  authorName.innerHTML = 'Author:';
  categoryName.innerHTML = 'Category:';
  publisherName.innerHTML = 'Publisher:';
  priceName.innerHTML = 'Price:';
  // making the textboxes for filtering
  const filterTextROW = document.createElement('tr');
  table.appendChild(filterTextROW);
  const titleTextbox = document.createElement('td');
  const authorTextbox = document.createElement('td');
  const categoryTextbox = document.createElement('td');
  const publisherTextbox = document.createElement('td');
  const priceTextbox = document.createElement('td');

  filterTextROW.appendChild(titleTextbox);
  filterTextROW.appendChild(authorTextbox);
  filterTextROW.appendChild(categoryTextbox);
  filterTextROW.appendChild(publisherTextbox);
  filterTextROW.appendChild(priceTextbox);

  // creating the input field and add to table
  const textBoxCategory = document.createElement('input');
  const textBoxPublisher = document.createElement('input');
  const textBoxPrice = document.createElement('input');

  categoryTextbox.appendChild(textBoxCategory);
  publisherTextbox.appendChild(textBoxPublisher);
  priceTextbox.appendChild(textBoxPrice);

  textBoxCategory.setAttribute('id', 'category');
  textBoxPublisher.setAttribute('id', 'publisher');
  textBoxPrice.setAttribute('id', 'price');

  data.forEach((element) => {
    const newRow = document.createElement('tr');
    newRow.style.width = '800px';
    const title = document.createElement('td');
    const author = document.createElement('td');
    const category = document.createElement('td');
    const publisher = document.createElement('td');
    const price = document.createElement('td');
    title.innerHTML = element.book_name;
    author.innerHTML = element.aut_name;
    category.innerHTML = element.cate_descrip;
    publisher.innerHTML = element.pub_name;
    price.innerHTML = element.book_price;
    newRow.appendChild(title);
    newRow.appendChild(author);
    newRow.appendChild(category);
    newRow.appendChild(publisher);
    newRow.appendChild(price);
    table.appendChild(newRow);
  });
  console.log(data);
}

const body = document.querySelector('body');
const button = document.createElement('button');
button.style.width = '100px';
button.style.height = '100px';
body.appendChild(button);

button.onclick = () => {
  const categoryValue = document.querySelector('#category').value;
  const publisherValue = document.querySelector('#publisher').value;
  const priceValue = document.querySelector('#price').value;
  if (categoryValue !== '') {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', reqListener);
    xhr.open('GET', `http://localhost:3000/api/allbook?category=${categoryValue}`);
    xhr.send();
  } else if (publisherValue !== '') {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', reqListener);
    xhr.open('GET', `http://localhost:3000/api/allbook?publisher=${publisherValue}`);
    xhr.send();
  } else if (priceValue !== '') {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', reqListener);
    xhr.open('GET', `http://localhost:3000/api/allbook?price=${priceValue}`);
    xhr.send();
  } else {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', reqListener);
    xhr.open('GET', 'http://localhost:3000/api/allbook');
    xhr.send();
  }
};

const xhr = new XMLHttpRequest();
xhr.addEventListener('load', reqListener);
xhr.open('GET', 'http://localhost:3000/api/allbook');
xhr.send();
