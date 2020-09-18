const button = document.querySelector('button');
const container = document.querySelector('.container');

button.addEventListener('click', async () => {
  const newJoke = document.createElement('div');
  newJoke.setAttribute('class', 'joke');
  fetch('http://api.icndb.com/jokes/random')
    .then((response) => response.json())
    .then((data) => {
      newJoke.innerText = data.value.joke;
      container.appendChild(newJoke);
    })
    .catch(reject => console.log(`The reqest is rejected because ${reject}`));
});
