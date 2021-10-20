let firstN = 0;
let secondN = 0;

function getValue () {
    firstN = Number(document.getElementById("firstN").value);
    secondN = Number(document.getElementById("secondN").value);
}

function cong() {
    getValue();
    let congN = firstN+secondN;
    document.getElementById("showResult").innerHTML = '<h3 id="showResult"> '+ congN +'</h3>';
}
function tru() {
    getValue();
    let truN = firstN-secondN;
    document.getElementById("showResult").innerHTML = '<h3 id="showResult"> '+ truN +'</h3>';
}
function nhan() {
    getValue();
    let nhanN = firstN*secondN;
    document.getElementById("showResult").innerHTML = '<h3 id="showResult"> '+ nhanN +'</h3>';
}
function chia() {
    getValue();
    let chiaN = firstN/secondN;
    document.getElementById("showResult").innerHTML = '<h3 id="showResult"> '+ chiaN +'</h3>';
}


// Chưa xong
// function allResult() {
//     let length = document.getElementById("calculate").children.length;
//     let calculate = "";
//     for(let i  = 0 ; i < length ; i++) {
//         if(document.getElementById("calculate").children[i]){
//             calculate = document.getElementById("calculate").children[i].value;
//             break;
//         }
//     }
//     getValue();
//     switch(calculate) {
//         case "+":
//             let congN = firstN+secondN;
//             document.getElementById("showResult").innerHTML = '<h3 id="showResult"> '+ congN +'</h3>';
//             break;
//         case "-":
//             let truN = firstN-secondN;
//             document.getElementById("showResult").innerHTML = '<h3 id="showResult"> '+ truN +'</h3>';
//             break;
//         case "x":
//             let nhanN = firstN*secondN;
//             document.getElementById("showResult").innerHTML = '<h3 id="showResult"> '+ nhanN +'</h3>';
//         case "/":
//             let chiaN = firstN/secondN;
//             document.getElementById("showResult").innerHTML = '<h3 id="showResult"> '+ chiaN +'</h3>';
//     }
// }
