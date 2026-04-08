let selectedSong = null;
let history = [];

function renderSongList() {
    console.log("曲リスト描画");
}

window.onload = async () => {
    try {
        await loadSongsFromFile();
        console.log("読み込み成功");

        history = loadHistory();
        renderSongList();
        renderHistory();
    } catch (e) {
        console.error("onloadエラー", e);
    }
};


function selectSong(id) {
    selectedSong = songs.find(s => s.id === id);
    // UI更新
}

function handleCalculate() {
    const score = Number(document.getElementById('scoreInput').value);

    if (!selectedSong || !score) return;

    const eff = calculateEfficiency(score, selectedSong.duration);

    history.unshift({
        song: selectedSong.name,
        score,
        efficiency: eff
    });

    saveHistory(history);
    renderHistory();
}