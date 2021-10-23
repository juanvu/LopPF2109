function calcuResult() {

    let mathInput = document.getElementById('mathInput');
    let mathInputVal = Number(mathInput.value);

    let literatureInput = document.getElementById('literatureInput');
    let literatureInputVal = Number(literatureInput.value);

    let englishInput = document.getElementById('englishInput');
    let englishInputVal = Number(englishInput.value);

    let calcuResult = mathInputVal + literatureInputVal + englishInputVal;

    let addressInput = document.getElementById('addressInput');
    let addressInputVal = addressInput.value;

    switch (addressInputVal) {
        case "KV1":
            calcuResult += 0.75;
            break;
        case "KV2-NT":
            calcuResult += 0.5;
            break;
        case "KV2":
            calcuResult += 0.25;
            break;
        case "KV3":
            calcuResult += 0;
            break;
        default:
            ("Mời bạn nhập lại");
    }
    document.getElementById('showResult').innerHTML = "<h3 id='showResult'> Tổng điểm ĐH khối D của bạn là: " + calcuResult + "</h3>";
}