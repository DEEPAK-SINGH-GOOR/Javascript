
const api = async () => {
    let response = await fetch('https://5dd1894f15bbc2001448d28e.mockapi.io/playlist');
    let data = await response.json();
    displayPlaylist(data);
};



const displayPlaylist = (data) => {
    const container = document.getElementById('playlist-container');
    container.innerHTML = data.map(item => `
            <div class="track">
                <img src="${item.albumCover}" alt="${item.track}" width="100" height="100">
                <h3>${item.track}</h3>
                <p>${item.artist}</p>
                <audio controls>
                    <source src="${item.file}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
        `).join('');
};


api();
