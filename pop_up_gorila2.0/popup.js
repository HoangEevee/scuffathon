// Get a reference to the gorilla element
const gorilla = document.getElementById("gorilla");

// Set the gorilla's initial position
let x = window.innerWidth - gorilla.offsetWidth;
let y = window.innerHeight - gorilla.offsetHeight;

// Move the gorilla to a random position
function moveGorilla() {
    x = Math.random() * window.innerWidth - gorilla.offsetWidth;
    y = Math.random() * window.innerHeight - gorilla.offsetHeight;
    gorilla.style.left = x + "px";
    gorilla.style.top = y + "px";
}

// Make the gorilla dance
function danceGorilla() {
    // Toggle the dancing class on the gorilla element
    gorilla.classList.toggle("dancing");
}

// Move the gorilla and make it dance periodically
setInterval(() => {
    moveGorilla();
    danceGorilla();
}, 1000);
