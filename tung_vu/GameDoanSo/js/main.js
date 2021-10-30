let play = function () {
    alert("Nhập vào khoảng muốn đoán");
    let min = parseInt(prompt("Nhập vào khoảng min"));
    let max = parseInt(prompt("Nhập vào khoảng max"));
    
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    let result = parseInt(prompt("Nhập vào số bạn đoán"));
    while (result != random) {
        result = parseInt(prompt("Nhập vào số bạn đoán"));
    }

}