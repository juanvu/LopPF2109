function checkEvenNumber() {
    let inputNumber = Number(parseInt(document.getElementById('inputNumber').value));
    if (inputNumber % 2 == 0) {
        alert("số bạn nhập vào là số chẵn");
    } else {
        alert("số bạn nhập vào là số lẻ");
    }
}