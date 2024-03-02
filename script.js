// Generate circles and append them to the background
const background = document.querySelector('.background');

for (let i = 0; i < 10; i++) { // Change the number of circles as needed
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    circle.style.top = `${Math.random() * 100}vh`; // Random vertical position
    circle.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random animation duration
    background.appendChild(circle);
}
