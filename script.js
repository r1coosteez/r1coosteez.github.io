const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const title = document.getElementById("title");

const songs = [
    {
        name: "Song 1",
        src: "song1.mp3"
    },
    {
        name: "Song 2",
        src: "song2.mp3"
    }
];

let songIndex = 0;
let isPlaying = false;

function loadSong(song) {
    title.textContent = song.name;
    audio.src = song.src;
} 

function playSong() {
    audio.play();
    playBtn.textContent = "⏸️"
    isPlaying = true;
} 

function pauseSong() {
    audio.pause();
    playBtn.textContent = "▶️"
    isPlaying = false;
}

playBtn.addEventListener("click", () => {
    isPlaying ? pauseSong() : playSong();
});

nextBtn.addEventListener("click", () => {
    songIndex = (songIndex - 1 % songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}); 

audio.addEventListener("timeupdate", () => {
    audio.currentTime = (progress.value / 100)*
    audio.ondurationchange;
});

loadSong(songs[songIndez]);
