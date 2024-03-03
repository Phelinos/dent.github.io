// Function to create a circle element with random speed
function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.left = '0px'; // Start all circles from the left edge
    circle.style.top = getRandom(0, window.innerHeight) + 'px';
    const speed = getRandom(2, 6); // Random speed between 2s and 6s
    circle.style.animationDuration = speed + 's'; // Set animation duration
    circle.style.animationTimingFunction = 'linear'; // Set animation timing function to linear
    document.getElementById('circles-container').appendChild(circle);
}

// Create circles at regular intervals
setInterval(createCircle, 2000); // Create a new circle every 2 seconds
