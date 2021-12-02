function checkNum(numberVal) {
    if(numberVal < 2) return false;
    for ( let i = 2; i <= Math.sqrt(numberVal); i++) {
        if(numberVal % i == 0) {
            return false;
        }
    }
    return true;
}

function findNum() {
    let arr = [];
    for (let i = 0; i <= 10000; i++) {
        if(checkNum(i)) {
            arr.push(i);
        }
    }
    return arr;
}
let arrNum = findNum();

function showResult() {
    let i = 0;
    const SNT = document.getElementById('numberElement');
    let result = ``;

    for (let num of arrNum) {
        if(i % 20 == 0) {
            result += '<tr>';
        }
        result += `<td>${num}</td>`;
        if(i % 20 == 19) {
            result += '</tr>';
            i = -1;
        }
        i++;
    }
    SNT.innerHTML = result;
}