function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    // Randomize circle size
    const size = Math.floor(Math.random() * 20) + 10; // Random size between 10px and 30px
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    circle.style.left = '0px';
    circle.style.top = '0px';
    
    // Randomize animation duration (speed)
    const speed = Math.random() * 4 + 2; // Random speed between 2s and 6s
    circle.style.animation = `moveCircles ${speed}s linear infinite`; // Set animation with dynamic speed
    
    document.querySelector('.background').appendChild(circle);

    // Schedule the creation of the next circle with a random delay
    setTimeout(createCircle, Math.random() * 5000); // Random delay between 0 and 5 seconds
}

// Initial call to start creating circles
createCircle();
