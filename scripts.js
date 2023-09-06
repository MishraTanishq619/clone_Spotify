let plc = document.querySelector("#playlists #cards");

k = "";
for (let i = 0; i < 7; i++) {
	k += `
    <div id="playlistcards" class="card">
        <img src="song1.jpeg" alt="Img" />
        <h3>Playlist_${i + 1}</h3>
        <h6>
            Lorem ipsum dolor sit, amet consectetur adipisicing.
        </h6>
    </div>`;
}
plc.innerHTML = k;

let sgc = document.querySelector("#songs #cards");

k = "";
for (let i = 0; i < 7; i++) {
	k += `
    <div class="card">
        <img src="songs2.jpeg" alt="Img" />
        <h3>Song_${i + 1}</h3>
        <h6>
            Lorem ipsum dolor sit, amet consectetur adipisicing.
        </h6>
    </div>`;
}
sgc.innerHTML = k;
