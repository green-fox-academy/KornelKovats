const deletionContainer = document.querySelector('.manage_container');

window.addEventListener('load', (event) => {
  fetch('http://localhost:3000/api/questions')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((element, index)=>{
        const table = document.querySelector('table');
        const row = document.createElement('tr');
        const columnNumber = document.createElement('td');
        const columnQuestion = document.createElement('td');
        const columnDeleteButton = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';

        columnNumber.innerText = index + 1;
        columnQuestion.innerText = element.question;
        columnDeleteButton.appendChild(deleteButton);

        row.appendChild(columnNumber);
        row.appendChild(columnQuestion);
        row.appendChild(columnDeleteButton);

        table.appendChild(row);
      });
    });
});
