let firstBox = document.createElement('div');
let secondBox = document.createElement('div');
let thirdBox = document.createElement('div');

let body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexFlow = 'row';
body.appendChild(firstBox);
body.appendChild(secondBox);
body.appendChild(thirdBox);
//style of the 3 boxes
firstBox.style.border = "thick solid black";
firstBox.style.height = '100px';
firstBox.style.width = '100px';

secondBox.style.border = "thick solid black";
secondBox.style.height = '100px';
secondBox.style.width = '100px';

thirdBox.style.border = "thick solid black";
thirdBox.style.height = '100px';
thirdBox.style.width = '100px';

//appending the first box with value
let bread = document.createElement('div');
bread.innerText = 'bread';
bread.style.width = '100px';
bread.style.height = '25px';

let milk = document.createElement('div');
milk.innerText = 'milk';
milk.style.width = '100px';
milk.style.height = '25px';

let orange = document.createElement('div');
orange.innerText = 'orange';
orange.style.width = '100px';
orange.style.height = '25px';

let tomato = document.createElement('div');
tomato.innerText = 'tomato';
tomato.style.width = '100px';
tomato.style.height = '25px';

firstBox.appendChild(bread);
firstBox.appendChild(milk);
firstBox.appendChild(orange);
firstBox.appendChild(tomato);