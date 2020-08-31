const firstBox = document.createElement('select');
const secondBox = document.createElement('div');
const thirdBox = document.createElement('select');

const body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexFlow = 'row';
body.appendChild(firstBox);
body.appendChild(secondBox);
body.appendChild(thirdBox);
// style of the 3 boxes
firstBox.style.border = 'thick solid black';
firstBox.setAttribute('size', '4');

firstBox.style.height = '100px';
firstBox.style.width = '100px';

secondBox.style.border = 'thick solid black';
secondBox.style.height = '100px';
secondBox.style.width = '100px';

thirdBox.style.border = 'thick solid black';
thirdBox.style.height = '100px';
thirdBox.style.width = '100px';
thirdBox.setAttribute('size', '4');

// appending the first box with value
const bread = document.createElement('option');
bread.innerText = 'bread';
bread.style.width = '100px';
bread.style.height = '25px';

const milk = document.createElement('option');
milk.innerText = 'milk';
milk.style.width = '100px';
milk.style.height = '25px';

const orange = document.createElement('option');
orange.innerText = 'orange';
orange.style.width = '100px';
orange.style.height = '25px';

const tomato = document.createElement('option');
tomato.innerText = 'tomato';
tomato.style.width = '100px';
tomato.style.height = '25px';

firstBox.appendChild(bread);
firstBox.appendChild(milk);
firstBox.appendChild(orange);
firstBox.appendChild(tomato);

// appending the second box with buttons
const up = document.createElement('button');
up.innerText = 'Up';
up.style.width = '100%';
up.style.height = '25px';

const right = document.createElement('button');
right.innerText = '>';
right.style.width = '100%';
right.style.height = '25px';

const del = document.createElement('button');
del.innerText = 'X';
del.style.width = '100%';
del.style.height = '25px';

const down = document.createElement('button');
down.innerText = 'Down';
down.style.width = '100%';
down.style.height = '25px';

secondBox.appendChild(up);
secondBox.appendChild(right);
secondBox.appendChild(del);
secondBox.appendChild(down);

// making the element selectable
firstBox.className = 'selectable';
// making the functions for right elements
right.onclick = function () {
  const selected = firstBox.selectedOptions;
  thirdBox.append(selected[0]);
};
// delete the selected elemnt
del.onclick = () => {
    const selected = firstBox.selectedOptions;
  firstBox.removeChild(selected[0]);
};
// making the first element the last
down.onclick = () => {
  firstBox.appendChild(firstBox.children[0]);
};
// making the last element first
