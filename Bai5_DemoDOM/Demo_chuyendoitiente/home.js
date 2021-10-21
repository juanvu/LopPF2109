const CurrencyPairArray = [{
    From: "Viet Nam",
    To: "USD",
    Rate: 0.000044
}, {
    From: "Thai Lan",
    To: "USD",
    Rate: 0.030
}, {
    From: "Viet Nam",
    To: "Yen",
    Rate: 0.0050
}, {
    From: "Thai Lan",
    To: "Yen",
    Rate: 0.000044
}]

let convertCurrency = function() {
    let amount = Number(document.getElementById('txtAmount').value);

    let fromCurrency = document.getElementById('slFromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;

    var currencyInfo = CurrencyPairArray.find(function(o) { 
		return o.From == fromCurrency && o.To == toCurrency;
    });
    //kiem tra currencyinfo is not null && is not undefined											
    if (currencyInfo) {

        document.getElementById('showRS').innerText = currencyInfo.Rate * amount;
    }
}
