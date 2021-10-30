let num = parseInt(prompt("Nhập vào một số nguyên dương >0"));
console.log(num);
let a = 1, b = 0, temp;
while ((isNaN(num)) || (num <= 0)) {
    num = parseInt(prompt("Nhập vào một số nguyên dương >0"));
}
while (num > 0) {
    temp = a;
    a = a + b;
    b = temp;
    num --
    document.write(b + "<br>");
}
