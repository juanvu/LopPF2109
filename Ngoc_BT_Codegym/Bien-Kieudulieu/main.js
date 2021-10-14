let x = prompt("Nhập vào giá trị x của bạn");
let y = prompt("Nhập vào giá trị y của bạn");
if(!isNaN(x) && !isNaN(y)) {
    x = Number(x);
    y = Number(y);
    let sum = x + y;
    alert("Tổng 2 số là" + sum);
}else {
    alert("Bạn đã nhập sai. Xin vui lòng nhập lại")
}