function playGame() {
    let space = Number(parseInt(prompt("Mời nhập vào khoảng muốn đoán")));
    let num = Math.floor(Math.random()*space);
    let valueInput;
    let i=0;
    do {
        valueInput = Number(parseInt(prompt("Mời nhập vào số dự đoán")));
        i++;
        while (valueInput !== num && i === 3) {
            alert("Bạn đã đoán quá 3 lần, mời chơi lại");
            reload();
        }
        while (valueInput === num) {
            alert("Bạn đã đoán đúng");
            reload();
        }
        if (valueInput < num) {
            alert("Số bạn nhập bé hơn giá trị ngẫu nhiên");
        }   else {
            alert("Số bạn nhập lớn hơn giá trị ngẫu nhiên");
        }
    }   while (valueInput !== num && i!== 3);
}