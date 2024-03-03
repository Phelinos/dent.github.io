function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.left = '0px';
    circle.style.top = '0px';
    const speed = Math.random() * 4 + 2; // Random speed between 2s and 6s
    circle.style.animation = `moveCircles ${speed}s linear infinite`; // Set animation with dynamic speed
    document.querySelector('.background').appendChild(circle);

    // Schedule the creation of the next circle with a random delay
    setTimeout(createCircle, Math.random() * 5000); // Random delay between 0 and 5 seconds
}

// Initial call to start creating circles
createCircle();
