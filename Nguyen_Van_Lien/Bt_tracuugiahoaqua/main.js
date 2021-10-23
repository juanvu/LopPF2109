let showPrice = function() {
    let inputName = document.getElementById('inputName').value;

    switch (inputName) {
        case 'Ổi':
        case 'Dưa hấu':
        case 'Chuối':
            document.getElementById('result').innerText = '20.000 VNĐ/kg';
            break;
        case 'Táo':
        case 'Xoài':
        case 'Lê':
        case 'Bưởi':
            document.getElementById('result').innerText = '30.000 VNĐ/kg';
            break;
        case 'Cam':
        case 'Chôm chôm':
        case 'Mít':
            document.getElementById('result').innerText = '40.000 VNĐ/kg';
            break;
        case 'Măng cụt':
            document.getElementById('result').innerText = '50.000 VNĐ/kg';
            break;
        default:
            document.getElementById('result').innerText = 'Mặt hàng này đã hết';

    }
}