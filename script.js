let searchBtn = document.getElementsByTagName('button');
let inputText = document.getElementsByTagName('input');

searchBtn[0].addEventListener("click", function(e) {
    if (inputText[0].classList.contains('active')) {
        inputText[0].classList.remove('active');
    } else {
        inputText[0].classList.add('active');
    }
})