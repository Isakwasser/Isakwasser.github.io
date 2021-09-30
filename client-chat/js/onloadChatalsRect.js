changeChanalsItemHeight();

var timeout = false,
    delay = 100;
window.addEventListener('resize', function () {
    clearTimeout(timeout);
    timeout = setTimeout(changeChanalsItemHeight, delay);
});

function changeChanalsItemHeight() {
    var rect = document.querySelectorAll(".chanals__item");
    rect.forEach(el => {
        el.style.height = el.offsetWidth + 'px';
    });
}