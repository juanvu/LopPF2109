function showResultFeet(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById('resultFeet').innerHTML = valNum * 0.305;
}
function showResultMeters(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById('resultMeters').innerHTML = valNum * 3.279;
}