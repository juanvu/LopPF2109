let day = Number(prompt("Nhập vào ngày của bạn"));
let month = Number(prompt("Nhập vào tháng của bạn"));
let year = Number(prompt("Nhập vào năm của bạn"));

if(day < 10) {
    day = "0" + day;
}

if(month < 10) {
    month = "0" + month;
}

function enterData () {
    document.write("Hôm nay là " + day + "-" + month + "-" + year)
}