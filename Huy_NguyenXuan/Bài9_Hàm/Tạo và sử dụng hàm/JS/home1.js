let numberFirst = Number(prompt("Mời bạn nhập vào số đầu tiên"));
let numberSecond = Number(prompt("Mời bạn nhập vào số thứ hai"));
function calculate(numberA,numberB) {
    if (numberA > numberB) {
        alert("Số đầu tiên lớn hơn số thứ hai");
    } else {
        alert("Số đầu tiên nhỏ hơn hoặc bằng số thứ hai");
        alert("Tổng hai số là " + (numberA + numberB));
    }
}
calculate(numberFirst,numberSecond);