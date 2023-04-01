// Get the gorilla element
const gorilla = document.getElementById('gorilla');

// Set the maximum X and Y coordinates for the gorilla element
const maxX = window.innerWidth - gorilla.offsetWidth;
const maxY = window.innerHeight - gorilla.offsetHeight;

// Move the gorilla element to a random position on the screen
function moveGorilla() {
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    gorilla.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Move the gorilla element every 2 seconds
setInterval(moveGorilla, 2000);
