const card = document.querySelector('.card');
let score = 0;
const h1 = document.querySelector('h1');

window.addEventListener('load', loadQuestion);

card.addEventListener('click', (event) => {
  if (event.target.className === 'answer') {
    if (event.target.dataset.is_correct === '1') {
      score++;
      event.target.style.backgroundColor = '#A5FF91';
      setTimeout(loadQuestion, 800);
    } else {
      event.target.style.backgroundColor = '#FF7878';
      setTimeout(loadQuestion, 800);
    }
  }
});

function loadQuestion() {
  h1.innerText = `SCORE: ${score}`;
  const answers = document.querySelectorAll('.answer');

  fetch('http://localhost:3000/api/game')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.question').innerHTML = data.question;
      h1.innerText = `SCORE: ${score}`;
      data.answers.forEach((element, index) => {
        document
          .getElementById(`${index}`)
          .setAttribute('style', 'background-color: #fff;');
        document.getElementById(`${index}`).innerHTML = element.answer;
        document.getElementById(`${index}`).dataset.is_correct = element.is_correct;
      });
    });
}
