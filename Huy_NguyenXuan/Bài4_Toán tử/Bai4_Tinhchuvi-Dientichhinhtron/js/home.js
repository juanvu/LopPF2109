function Tinhhinhtron() {
    let a = parseFloat(document.getElementById('radius').value);

    document.write("Với hình tròn có bán kính là " + a + " ta có:");
    document.write("<br>");

    document.write("Đường kính bằng: " + a * 2);
    document.write("<br>");

    let chuvi = (2 * a * Math.PI);
    document.write("Chu vi hình tròn là: " + chuvi);
    document.write("<br>");

    let dientich = (a * a * Math.PI);
    document.write("Diện tích hình tròn là " + dientich);
}