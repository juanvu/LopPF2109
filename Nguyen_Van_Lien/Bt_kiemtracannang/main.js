let showBmi = function() {
    let leftNum = document.getElementById('firstInput').value;
    let rightNum = document.getElementById('secondInput').value;

    let result = parseInt(leftNum) / parseInt(rightNum ** 2);

    if (result < 16)　{
        document.getElementById('result').innerText = 'Gầy độ 3';
    } 
    if (result >= 16 && result < 17) {
        document.getElementById('result').innerText = 'Gầy độ 2';

    } else if (result >= 17 && result < 18.5) {
        document.getElementById('result').innerText = 'Gầy độ 1';

    } else if (result >= 18.5 && result < 25) {
        document.getElementById('result').innerText = 'Bình thường';

    } else if (result>= 25 && result < 30) {
        document.getElementById('result').innerText = 'Thừa cân';

    } else if (result >= 30 && result < 35) {
        document.getElementById('result').innerText = 'Béo phì độ 1';

    } else if (result >= 35 && result < 40) {
        document.getElementById('result').innerText = 'Béo phì độ 2';

    } else if (result > 40) {
        document.getElementById('result').innerText = 'Béo phì độ 3';

    }
}