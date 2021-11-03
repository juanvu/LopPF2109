let i1 = 1;
let i2 = 1;
let iN = 0;

let indexFi = Number(prompt("Bạn muốn tính số Fibonacci thứ: "));
const Fi = indexFi;

function resultFi() {
    while(indexFi > 2) {
        iN = i1+i2;
        i1 = i2;
        i2 = iN;
        indexFi--;
    }
    return iN;
}

function start() {
    resultFi();
    alert("Số Fibonacci thứ " + Fi + " là " + iN);
}