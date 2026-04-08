let songs = [];

async function loadSongsFromFile() {
    try {
        const res = await fetch('songs.json');
        songs = await res.json();
    } catch (e) {
        console.error('楽曲データ読み込み失敗', e);
    }
}