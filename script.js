<script>
    // Generate circles and append them to the background
    const background = document.querySelector('.background');

    const numberOfCircles = 10; // Change the number of circles here
    const minSize = 10; // Minimum size of the circle in pixels
    const maxSize = 30; // Maximum size of the circle in pixels

    for (let i = 0; i < numberOfCircles; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        // Randomize position
        circle.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        circle.style.top = `${Math.random() * 100}vh`; // Random vertical position
        
        // Randomize size
        const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        
        // Randomize animation duration
        circle.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random animation duration

        background.appendChild(circle);
    }
</script>
