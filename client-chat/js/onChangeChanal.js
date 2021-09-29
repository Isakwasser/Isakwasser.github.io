function changeChanal(el) {
    var elements = document.querySelectorAll('label[for*="radio__"');
    
    elements.forEach(elem => {
        elem.classList.remove('active');
    });
    el.classList.add('active');
}