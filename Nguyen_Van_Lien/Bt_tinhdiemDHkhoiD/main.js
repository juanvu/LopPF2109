let showResult = function() {
    let firstInput = document.getElementById('inputMath').value;
    let secondInput = document.getElementById('inputLiterature').value;
    let thirdInput = document.getElementById('inputEnglish').value;
    let fourthInput = document.getElementById('selectDistrict').value;

    let sum = 0;
    
    switch(fourthInput) {
        case 'KV1':
            sum += 0.75;
            break;
        case 'KV2':
            sum += 0.5;
            break;
        case 'KV2-Nt':
            sum += 0.25;
            break;
    }

    let result = parseInt(firstInput) + parseInt(secondInput) + parseInt(thirdInput) + sum;

    document.getElementById('result').innerText = 'Tổng điểm ĐH khối D của bạn là: ' + result;
}