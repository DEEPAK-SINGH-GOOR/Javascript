document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audioPlayer");
    const albumCover = document.getElementById("albumCover");
    const trackTitle = document.getElementById("trackTitle");
    const trackArtist = document.getElementById("trackArtist");
    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const randomBtn = document.getElementById("randomBtn");
    const undoBtn = document.getElementById("undoBtn");
    const progress = document.getElementById("progress");
    const musicList = document.getElementById("musicList");

    let currentTrackIndex = 0;
    let tracks = [];
    let shuffledTracks = [];

    const fetchTracks = async () => {
        const response = await fetch("https://5dd1894f15bbc2001448d28e.mockapi.io/playlist");
        tracks = await response.json();
        shuffledTracks = [...tracks]; // Create a copy for shuffling
        renderMusicList();
        loadTrack(currentTrackIndex);
    };

    const loadTrack = (index) => {
        const track = tracks[index];
        albumCover.src = track.albumCover;
        trackTitle.innerText = track.track;
        trackArtist.innerText = track.artist;
        audio.src = track.file;
    };

    const renderMusicList = () => {
        musicList.innerHTML = tracks.map((track, index) => `
            <div class="music-item" onclick="playTrack(${index})">
                <img class="music-thumbnail" src="${track.albumCover}" alt="Album Cover">
                <div class="music-info">
                    <h4 class="music-title">${track.track}</h4>
                    <h6 class="music-artist">${track.artist}</h6>
                </div>
            </div>
        `).join('');
    };

    window.playTrack = (index) => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        playAudio();
    };

    const playAudio = () => {
        audio.play();
        playBtn.style.display = "none";
        pauseBtn.style.display = "inline";
    };

    const pauseAudio = () => {
        audio.pause();
        playBtn.style.display = "inline";
        pauseBtn.style.display = "none";
    };

    playBtn.addEventListener("click", playAudio);
    pauseBtn.addEventListener("click", pauseAudio);

    prevBtn.addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
        playAudio();
    });

    nextBtn.addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
        playAudio();
    });

    randomBtn.addEventListener("click", () => {
        shuffleTracks();
        currentTrackIndex = 0;
        loadTrack(currentTrackIndex);
        playAudio();
    });

    undoBtn.addEventListener("click", () => {
        // Implement logic to go back to the previous track, if possible
        if (currentTrackIndex > 0) {
            currentTrackIndex--;
            loadTrack(currentTrackIndex);
            playAudio();
        }
    });

    audio.addEventListener("timeupdate", () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${progressPercent}%`;
    });

    const shuffleTracks = () => {
        for (let i = shuffledTracks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledTracks[i], shuffledTracks[j]] = [shuffledTracks[j], shuffledTracks[i]];
        }
        tracks = [...shuffledTracks];
        renderMusicList();
    };

    fetchTracks();
});
