function toggleSongs() {
    songsSecondHalf = document.getElementById("songs-second-half");
    songsSecondHalf.classList.toggle("hidden");
}

document.getElementById("songs-second-half").classList.add("hidden");

document.getElementById("toggle-button").onclick = toggleSongs;