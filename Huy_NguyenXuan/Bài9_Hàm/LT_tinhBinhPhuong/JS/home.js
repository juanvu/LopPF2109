function getSquare(num) {
    var result = num * num;
    return result;
}
function calcuTxt() {
    let valInput = document.getElementById('valInput').value;
    var result = getSquare(valInput);
    document.getElementById('result').innerHTML = result;
}