let showValue = function() {
    document.getElementById('vnCurrency');
    document.getElementById('usdCurrency');
    let input = document.getElementById('firstInput').value;
    
    let convert = parseInt(input) / 23000;
    document.getElementById('convert').innerText = convert;
}