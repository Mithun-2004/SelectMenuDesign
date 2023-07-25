let selectOptions = document.querySelector('#select-option');
let arrowImg = document.querySelector('#select-option img');
let dropDown = document.querySelector('ul');
let options = document.querySelectorAll('ul li');
let selected = document.querySelector('#select-option p');

selectOptions.addEventListener('click', function(){
    dropDown.classList.toggle('visible');
    arrowImg.classList.toggle('rotate');
})

options.forEach(option => {
    option.addEventListener('click', ()=> {
        selected.innerText = option.innerText;
        dropDown.classList.remove('visible');
        arrowImg.classList.remove('rotate');
    })
})