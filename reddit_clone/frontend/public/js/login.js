const form = document.querySelector('#login_form');
let username = document.querySelector('#username');
form.addEventListener('keydown',()=>{
    console.log(username.value);
})
form.addEventListener('submit',()=>{
    localStorage.username = username.value;
})