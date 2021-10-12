const PI = 3.14;
let R = Number(prompt("Nhập vào bán kính của hình tròn"));

let chuVi = 2 * R * PI;
let dienTich = R * R * PI;

function CalculateCircle() {
    document.writeln("Chu vi hình tròn là: " + chuVi);
    document.writeln("<br>");
    document.writeln("Diện tích hình tròn là: " + dienTich);
}