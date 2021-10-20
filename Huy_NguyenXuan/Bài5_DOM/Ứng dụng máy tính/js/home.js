let numberA = 0;
let numberB = 0;
function addNewNumber() {
    numberA = Number(document.getElementById('innerText').value);
    numberB = Number(document.getElementById('innerText2').value);
}
function addNumber() {
    addNewNumber()
    // let numberA = Number(document.getElementById('innerText').value);
    // let numberB = Number(document.getElementById('innerText2').value);
    var result = numberA + numberB;
    document.getElementById("showResult").innerHTML = ('<p id="showResult"> '+ result +'</p>');
}
function subNumber() {
    addNewNumber()
    // let numberA = Number(document.getElementById('innerText').value);
    // let numberB = Number(document.getElementById('innerText2').value);
    var result = numberA - numberB;
    document.getElementById("showResult").innerHTML = '<p id="showResult"> '+ result +'</p>';
}
function multiNumber() {
    addNewNumber()
    // let numberA = Number(document.getElementById('innerText').value);
    // let numberB = Number(document.getElementById('innerText2').value);
    var result = numberA * numberB;
    document.getElementById("showResult").innerHTML = '<p id="showResult"> '+ result +'</p>';
}
 function divNumber() {
    addNewNumber()
    // let numberA = Number(document.getElementById('innerText').value);
    // let numberB = Number(document.getElementById('innerText2').value);
    var result = numberA / numberB;
    document.getElementById("showResult").innerHTML = '<p id="showResult"> '+ result +'</p>';
}

    // Mở rộng
    // function openBrack() {
    //     let innerTextBox = document.getElementById('innerTextBox')
    //     let openBrack = document.getElementById('openBrack');
    //     openBrack.innerHTML = '(';
    // }