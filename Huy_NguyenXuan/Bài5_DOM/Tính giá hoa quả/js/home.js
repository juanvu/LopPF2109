function checkFruit() {
    let fruitInput = document.getElementById('fruitInput');
    let fruitInputVal = fruitInput.value.toUpperCase();
    switch (fruitInputVal) {
        case 'ỔI':
        case 'DƯA HẤU':
            document.getElementById('resultFruit').innerHTML = "<h3 id='resultFruit'>20000 VNĐ/kg</h3>";
            break;
        case 'TÁO':
        case 'XOÀI':
            document.getElementById('resultFruit').innerHTML = "<h3 id='resultFruit'>30000 VNĐ/kg</h3>";
            break;
        case 'CAM':
        case 'CHÔM CHÔM':
            document.getElementById('resultFruit').innerHTML = "<h3 id='resultFruit'>40000 VNĐ/kg</h3>";
            break;
        case 'MĂNG C':
            document.getElementById('resultFruit').innerHTML = "<h3 id='resultFruit'>50000 VNĐ/kg</h3>";
            break;
        default:
            alert('Mời bạn nhập lại');
    }
}