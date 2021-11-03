let num = Number(prompt("Nhập vào số của bạn: "));

let total = 0;

while(num != -1) {
    num = Number(prompt("Nhập vào số của bạn: "));
    total += num;
}
alert("Tổng các số bạn vừa nhập là " + total);