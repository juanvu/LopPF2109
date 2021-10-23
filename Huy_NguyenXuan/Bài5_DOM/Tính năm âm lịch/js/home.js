let year = parseInt(prompt("Moi ban nhap nam |Enter a  year"));
let canInput = year % 10;
switch (canInput) {
    case 0:
        canInput = "Canh";
        break;
    case 1:
        canInput = "Tân";
        break;
    case 2:
        canInput = "Nhâm";
        break;
    case 3:
        canInput = "Quý";
        break;
    case 4:
        canInput = "Giáp";
        break;
    case 5:
        canInput = "Ất";
        break;
    case 6:
        canInput = "Bính";
        break;
    case 7:
        canInput = "Đinh";
        break;
    case 8:
        canInput = "Mậu";
        break;
    case 9:
        canInput = "Kỳ";
        break; 
}
let chiInput = year % 12;
switch (chiInput) {
    case 0:
        chiInput = "Thân";
        break;
    case 1:
        chiInput = "Dậu";
        break;
    case 2:
        chiInput = "Tuất";
        break;
    case 3:
        chiInput = "Hợi";
        break;
    case 4:
        chiInput = "Tí";
        break;
    case 5:
        chiInput = "Sửu";
        break;
    case 6:
        chiInput = "Dần";
        break;
    case 7:
        chiInput = "Mẹo";
        break;
    case 8:
        chiInput = "Thìn";
        break;
    case 9:
        chiInput = "Tỵ";
        break;
    case 10:
        chiInput = "Ngọ";
        break; 
    case 11:
        chiInput = "Mùi";
        break;  
}
alert(canInput + ' ' + chiInput);