let n = Number(prompt("Mời nhập số lượng số nguyên tố cần in ra"));
function in_snt(n) {
    let count;
    for 
}
function kiem_tra_snt(cout) {
    // Biến cờ hiệu
    let flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else{
        // lặp từ 2 tới n-1
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến flag
    if (flag == true){
        document.write(n);
    }
}