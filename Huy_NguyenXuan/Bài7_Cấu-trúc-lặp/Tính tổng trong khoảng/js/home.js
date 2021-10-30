function totalNum() {
    let numberA = Number(document.getElementById('numberA').value);
    let numberB = Number(document.getElementById('numberB').value);
    let result=0,nextNum = 0;
    if (numberA >= numberB) {
        nextNum = numberA;
        numberA = numberB;
        numberB = nextNum;
    }
    for (var i=numberA; i<=numberB; i++) {
        result += i;
    }
    if (numberA == numberB) {
        result += result;
    }
    document.getElementById('showResult').innerHTML = "<p id='showResult'>" + result + "</p>";
}