// Function to generate a random number between min and max
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a circle element
function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.left = getRandom(0, window.innerWidth) + 'px';
    circle.style.top = getRandom(0, window.innerHeight) + 'px';
    circle.style.animationDuration = getRandom(2, 6) + 's'; // Random duration between 2s and 6s
    document.getElementById('circles-container').appendChild(circle);
}

// Create circles at regular intervals
setInterval(createCircle, 2000); // Create a new circle every 2 seconds
