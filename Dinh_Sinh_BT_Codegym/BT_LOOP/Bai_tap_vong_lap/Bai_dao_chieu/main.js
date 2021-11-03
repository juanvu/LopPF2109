let guessStr = prompt("Nhập vào chuỗi của bạn:");
let reverseStr = "";

function result() {
    let length = guessStr.length; 
    if(isNaN(guessStr)) {
        for(let i = length-1 ; i >= 0; i--) {
            reverseStr += guessStr[i];
        }
        return reverseStr;
    }else {
        for(let i = length-1 ; i >= 0; i--) {
            if(guessStr[i] == 0) {
                continue;
            }
            reverseStr += guessStr[i];
        }
        return reverseStr;
    }
}

function start() {
    result();
    alert("Chuỗi của bạn sau khi đảo ngược là : " + reverseStr);
}