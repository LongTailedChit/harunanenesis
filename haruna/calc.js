function calculateEfficiency(score, duration) {
    return Math.round(score * 60 / duration);
}

function getRank(eff) {
    if (eff >= 100000) return 'SSS';
    if (eff >= 80000) return 'SS';
    if (eff >= 60000) return 'S';
    if (eff >= 40000) return 'A';
    if (eff >= 20000) return 'B';
    return 'C';
}