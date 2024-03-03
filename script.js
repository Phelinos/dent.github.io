function createCircle(minSize, maxSize, minSpeed, maxSpeed) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    // Randomize circle size within specified range
    const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize; // Random size between minSize and maxSize
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    circle.style.left = '0px';
    circle.style.top = '0px';
    
    // Randomize animation duration (speed) within specified range
    const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed; // Random speed between minSpeed and maxSpeed
    circle.style.animation = `moveCircles ${speed}s linear infinite`; // Set animation with dynamic speed
    
    document.querySelector('.background').appendChild(circle);

    // Schedule the creation of the next circle with a random delay
    setTimeout(() => createCircle(minSize, maxSize, minSpeed, maxSpeed), Math.random() * 5000); // Random delay between 0 and 5 seconds
}

// Initial call to start creating circles with specific parameters
createCircle(50, 100, 2, 6); // Example parameters: minSize = 10px, maxSize = 30px, minSpeed = 2s, maxSpeed = 6s
