window.addEventListener('load', loadQuestion);
function loadQuestion() {
  fetch('http://localhost:3000/api/game')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.question').innerHTML = data.question;
      data.answers.forEach((element, index)=>{
          console.log(element);
        document.getElementById(`${index}`).innerHTML = element.answer;
      })

      //onsole.log(data);
    });
}
