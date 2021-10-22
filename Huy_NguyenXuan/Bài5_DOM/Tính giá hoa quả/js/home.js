function checkFruit() {
    let fruitInput = document.getElementById('fruitInput');
    let fruitInputVal = fruitInput.value;
    switch (fruitInputVal) {
        case 'Ổi':
        case 'Dưa Hấu':
            document.getElementById('resultFruit').innerHTML = "<h3 id='resultFruit'>20000 VNĐ/kg</h3>";
            break;
        case 'Táo':
        case 'Xoài':
            document.getElementById('resultFruit').innerHTML = "<h3 id='resultFruit'>30000 VNĐ/kg</h3>";
            break;
        case 'Cam':
        case 'Chôm Chôm':
            document.getElementById('resultFruit').innerHTML = "<h3 id='resultFruit'>40000 VNĐ/kg</h3>";
            break;
        case 'Măng Cụt':
            document.getElementById('resultFruit').innerHTML = "<h3 id='resultFruit'>50000 VNĐ/kg</h3>";
            break;
        default:
            alert('Mời bạn nhập lại');
    }
}