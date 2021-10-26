let diliInputVal = Number(prompt('Nhập điểm chuyên cần: 1>10 :Quy đổi như sau: 8-10: 0.5 ; 5-7: 0.25 ; 3-4: 0.1'));
let diliVal = 0;
if  (8 <= diliInputVal && diliInputVal <= 10) {
    diliVal = 0.5;
} else if (5 <= diliInputVal && diliInputVal < 8) {
    diliVal = 0.25;
} else if (3 <= diliInputVal && diliInputVal < 5) {
    diliVal = 0.1;
} else {
    diliVal = 0;
}
let sumInputVal = Number(prompt('Nhập điểm tổng kết'));
let totalInput = sumInputVal + diliVal;
if (0 < totalInput && totalInput < 4) {
    alert("Hạng D");
}   else if (4 <= totalInput && totalInput < 6) {
    alert("Hạng C");
}   else if (6 <= totalInput && totalInput <= 9) {
    alert("Hạng B");
}   else {
    alert("Hạng A");
}