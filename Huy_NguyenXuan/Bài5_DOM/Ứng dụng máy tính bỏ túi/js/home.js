function numberInput(num) {
    let showResultInput = document.getElementById('calShowResult');
    let showResultInputVal = showResultInput.value;
    let newVal = showResultInputVal + num;
    showResultInput.value = newVal;
}
function operaInput(opera) {
    let showResultInput = document.getElementById('calShowResult');
    let showResultInputVal = showResultInput.value;
    let newVal = showResultInputVal + opera;
    showResultInput.value = newVal;
}
function showResult() {
    let showResultInput = document.getElementById('calShowResult');
    let showResultInputVal = showResultInput.value;
    let alertCmd = `alert(${showResultInputVal});`;
    eval(alertCmd);
}
function deleteChar() {
    let showResultInput = document.getElementById('calShowResult');
    let showResultInputVal = showResultInput.value;
    let newVal = showResultInputVal;
    showResultInput.value = newVal.substring(0,length(newVal-1));
}