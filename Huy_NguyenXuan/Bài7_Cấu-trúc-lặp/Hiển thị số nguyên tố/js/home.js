let number = Number(prompt("Mời nhập số lượng số nguyên tố cần in ra"));
let count=0;
for ( count=0; count<number; count++) {
    for (var n=2; n<1000; n++) {
        for (var i=2; i < n;i++) {
            if (n % i !== 0){
                document.write(n);
            }
        }
    }
}