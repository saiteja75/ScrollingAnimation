let box = document.querySelectorAll('.box');

document.addEventListener('scroll', function(e) {
    box.forEach(element => {
        if (inViewPort(element)) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
})

function inViewPort(element) {
    const triggerBottom = window.innerHeight;
    let elePos = element.getBoundingClientRect().top;
    if (elePos < triggerBottom) {
        return true;
    } else {
        return false;
    }
}