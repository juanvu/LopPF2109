let canNang = Number(prompt("Nhập vào cân nặng của bạn"));
let chieuCao = Number(prompt("Nhập vào chiều cao của bạn"));

let BMI = canNang/(chieuCao * chieuCao);

if(chieuCao && canNang) {
    if(BMI < 16) {
        alert("Bạn gầy độ III");
    }else if(BMI >= 16 && BMI < 17) {
        alert("Bạn gầy độ II");
    }else if(BMI >= 17 && BMI < 18.5) {
        alert("Bạn gầy độ I");
    }else if(BMI >= 18.5 && BMI < 25) {
        alert("Bạn bình thường");
    }else if(BMI >= 25 && BMI < 30) {
        alert("Bạn đang thừa cân");
    }else if(BMI >= 30 && BMI < 35) {
        alert("Bạn béo phì độ I");
    }else if(BMI >= 35 && BMI < 40) {
        alert("Bạn béo phì độ II");
    }else {
        alert("Bạn béo phì độ III");
    }
}else {
    alert("Vui lòng nhập vào thông tin bắt buộc")
}