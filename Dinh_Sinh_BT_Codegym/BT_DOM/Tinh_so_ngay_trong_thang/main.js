function checkMonth(){
    let month = Number(document.getElementById("month").value);
    if(month) {
        switch(month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                alert("Tháng " + month + " có 31 ngày!");
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                alert("Tháng " + month + " có 30 ngày!");
                break;
            case 2:
                alert("Tháng " + month + " có 28 ngày(29 ngày nếu năm nhuận!)");
                break;
            default:
                alert("Vui lòng nhập lại!");
        }
    }
}