function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

let modal = $('.modal');
let tableButtons = $$('.table__button');
let closeButton = $('.modal__close');
let modalForm = $('.modal__form');
let email = $('.email');
let phone = $('.phone');
let fio = $('.fio');
let sum = $('.sum');
let age = $('.age');
let personRequest = {
    email: '',
    phone: '',
    fio: '',
    sum: '',
    age: ''
}   


tableButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.add('active');
    })
})

modalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    personRequest.email = email.value;
    personRequest.phone = phone.value;
    personRequest.fio = fio.value;
    personRequest.sum = sum.value;
    personRequest.age = age.value;
    console.log(personRequest);
    modal.classList.remove('active');
})

closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
})