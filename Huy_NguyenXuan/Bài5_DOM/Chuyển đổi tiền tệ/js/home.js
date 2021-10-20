function moneyConvert() {
    let moneyConvert = Number(document.getElementById('moneyConvert').value);
    let moneyFrom = document.getElementById('moneyFrom').value;
    let moneyTo = document.getElementById('moneyTo').value;
    if (moneyFrom == 'USD') {
        if (moneyTo == 'VND') {
            var moneyRate = 22760.22;
            var result = moneyConvert * moneyRate;
        } else if (moneyTo == 'Yên') {
            var moneyRate = 114.23;
            var result = moneyConvert * moneyRate;
        } else {
            var result = moneyConvert;
        }
    } else if (moneyFrom == 'VND') {
        if (moneyTo == 'VND') {
            var result = moneyConvert;
        } else if (moneyTo == 'USD') {
            var moneyRate = 0.000044;
            var result = moneyConvert * moneyRate;
        } else {
            var moneyRate = 0.0050;
            var result = moneyConvert * moneyRate;
        }
    } else {
        if (moneyTo == 'VND') {
            var moneyRate = 199.08;
            var result = moneyConvert * moneyRate;
        } else if (moneyTo == 'USD') {
            var moneyRate = 0.0087;
            var result = moneyConvert * moneyRate;
        } else {
            var result = moneyConvert;
        }
    }
    document.getElementById('displayResult').innerHTML = '<p id="displayResult">' + result + '</p>';
}