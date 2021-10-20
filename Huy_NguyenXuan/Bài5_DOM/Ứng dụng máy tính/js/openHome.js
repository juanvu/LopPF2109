let innerTextBox = 0;
function openBrack() {
    
    let openBrack = document.getElementById('openBrack').value;
        let innerTextBox = document.getElementById('innerTextBox').value;
    innerTextBox.innerHTML = innetTextBox + openBrack;
}
function offBrack() {
    let offBrack = document.getElementById('offBrack').value;
    let innerTextBox = document.getElementById('innerTextBox').value;
    innerTextBox.innerHTML = innerTextBox + offBrack;
}