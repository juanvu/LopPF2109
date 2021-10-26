let showResult = function() {
    let showVal = document.getElementById('selectDay').value;
    

    switch(showVal) {
        case 'thu 2':
        case 'thu 4':
        case 'thu 6':
            document.getElementById('result').innerText = 'Thực hành';
        break;
        case 'thu 3':
        case 'thu 5':
        case 'thu 7':
            document.getElementById('result').innerText = 'Học Codegym';
        break;
        default:
            document.getElementById('result').innerText = 'Nghỉ';
        break;
    }
}