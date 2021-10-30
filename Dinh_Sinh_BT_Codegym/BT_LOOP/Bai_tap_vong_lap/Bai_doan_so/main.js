let numberKey = 0;
let i = 0;

function play() {
    let number = prompt("Nhập vào số lớn nhất của bạn để bắt đầu: ");
    do {
        numberKey = Math.floor(Math.random() * Number(number));
        let guessNumber = prompt("Nhập vào số mà bạn đoán: ");
        if(Number(guessNumber) == numberKey) {
            alert("Bạn đã chiến thắng trò chơi");
            break;
        }else {
            if(Number(guessNumber < numberKey)) {
                alert("Số bạn chọn nhỏ hơn số cần tìm");
            }else {
                alert("Số bạn chọn lớn hơn số cần tìm");
            }
            i++;
        }
    }while(!isNaN(number));
    if(i > 3) {
        alert("Bạn đã thua cuộc!!!");
    }
}