let year = Number(prompt("Nhập vào năm dương lịch bạn muốn tính"));

let Can = year % 10;

switch(Can) {
    case 0: Can = "Canh";
    case 1: Can = "Tân";
    case 2: Can = "Nhâm";
    case 3: Can = "Quý";
    case 4: Can = "Giáp";
    case 5: Can = "Ất";
    case 6: Can = "Bính";
    case 7: Can = "Đinh";
    case 8: Can = "Mậu";
    case 9: Can = "Kỷ";
}

let Chi = year % 12;

switch(Chi) {
    case 0: Chi = " Thân";
    case 1: Chi = " Dậu";
    case 2: Chi = " Tuất";
    case 3: Chi = " Hợi";
    case 4: Chi = " Tí";
    case 5: Chi = " Sửu";
    case 6: Chi = " Dần";
    case 7: Chi = " Mẹo";
    case 8: Chi = " Thìn";
    case 9: Chi = " Tị";
    case 10: Chi = " Ngọ";
    case 11: Chi = " Mùi";
}

alert("Năm 2" + year + " trong âm lịch là năm " + Can + Chi);