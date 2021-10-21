let can_nang = Number(prompt("Mời nhập vào cân nặng của bạn"));
let chieu_cao = Number(prompt("Mời nhập vào chiều cao của bạn"));

BMI = can_nang / (chieu_cao * chieu_cao);

if (BMI < 16) {
    document.write("Gầy độ III");
} else if (16 <= BMI && BMI < 17) {
    document.write(' Gầy độ II');
} else if (17 <= BMI && BMI < 18.5) {
    document.write('Gầy độ I');
} else if (18.5 <= BMI && BMI < 25) {
    document.write('Bình thường');
} else if (25 <= BMI && BMI < 30) {
    document.write('Thừa cân');
} else if (30 <= BMI && BMI < 35) {
    document.write('Béo phì độ I');
} else if (35 <= BMI && BMI < 40) {
    document.write('Béo phì độ II');
} else if (16 <= BMI && BMI < 17) {
    document.write('');
} else {
    document.write('Béo phì độ III');
}