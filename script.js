function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.left = '0px';
    circle.style.top = '0px';
    const speed = Math.random() * 4 + 2; // Random speed between 2s and 6s
    circle.style.animation = `moveCircles ${speed}s linear infinite`; // Set animation with dynamic speed
    document.querySelector('.background').appendChild(circle);
}

setInterval(createCircle, 2000); // Create a new circle every 2 seconds
