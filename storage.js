function loadHistory() {
    return JSON.parse(localStorage.getItem('history') || '[]');
}

function saveHistory(data) {
    localStorage.setItem('history', JSON.stringify(data));
}