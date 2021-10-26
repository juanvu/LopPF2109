let showResult = function() {
    let addPointVal = document.getElementById('addPoint'). value;
    let yourPointVal = document.getElementById('yourPoint').value;

    let num = 0;

    switch(addPointVal) {
        case '3':
        case '4':
            num += 0.1; break;
        case '5':
        case '6':
        case '7':
            num += 0.25; break;
        case '8':
        case '9':
        case '10':
            num += 0.5; break;
    }

    let result = parseInt(yourPointVal) + num;

    if(result < 4) {
        document.getElementById('result').innerText = 'Xếp hạng của bạn là D';
    } else if(result > 4 && result < 6) {
        document.getElementById('result').innerText = 'Xếp hạng của bạn là C';
    } else if(result > 6 && result < 9) {
        document.getElementById('result').innerText = 'Xếp hạng của bạn là B';
    } else if(result >= 10) {
        document.getElementById('result').innerText = 'Xếp hạng của bạn là A';
    }
}