let num = prompt("Nhập vào 1 số nguyên dương");
let newNum = "";
while ((isNaN(num)) || num <= 0) {
    num = prompt("Nhập vào 1 số nguyên dương");
}
for (let i = num.length - 1; i >= 0; i--) {
    newNum += num[i];
    console.log(newNum);
}
alert("Số đảo ngược là: " + newNum);