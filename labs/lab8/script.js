function toggleTheme() {
    body = document.querySelector("body");
    body.classList.toggle("dark-mode");
}

document.getElementById("toggleButton").onclick = toggleTheme;