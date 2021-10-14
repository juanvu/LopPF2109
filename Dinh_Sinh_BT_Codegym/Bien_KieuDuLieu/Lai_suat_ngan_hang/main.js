let tienGui = Number(prompt("Nhập vào số tiền cần gửi"));
let laiSuat = Number(prompt("Nhập vào lãi suất (%)")) / 100;
let nam = Number(prompt("Nhập vào số năm cần gửi"));

let tienLai = tienGui * laiSuat * nam;
let sumMoney = tienGui + tienLai

function CalculateRate() {
    document.write("Số tiền bạn nhận được là " + sumMoney +" (triệu đồng)");
}

