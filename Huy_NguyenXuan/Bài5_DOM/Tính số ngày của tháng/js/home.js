function calDayOfMonth() {
    monthInput = document.getElementById('monthInput');
    monthInputValue = Number(monthInput.value);
    switch (monthInputValue) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("Tháng " + monthInputValue + " có 31 ngày!");
                break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert("Tháng " + monthInputValue + " có 30 ngày!");
            break;
        case 2:
            alert("Tháng " + monthInputValue + " có 28 hoặc 29 ngày nếu năm nhuận!");
            break;
        default:
            alert("Vui lòng nhập lại!");
    }
}