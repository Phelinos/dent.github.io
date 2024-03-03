function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.left = '0px';
    circle.style.top = getRandom(0, window.innerHeight) + 'px';
    const speed = getRandom(2, 6);
    circle.style.animationDuration = speed + 's';
    document.querySelector('.background').appendChild(circle);
}

setInterval(createCircle, 2000);
