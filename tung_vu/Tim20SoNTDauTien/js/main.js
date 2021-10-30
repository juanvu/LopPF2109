function OK() {
    // let numbers = Number(prompt("Nhập vào số lương số nguyên tố cần tìm"));
    let count = 0, i = 2;
    while (count <= 20) {
        let j = 2, kt = 1;
        if (i != 0 && i != 1) {
            j = 2;
            while (j <= i/2) {
                if (i%j == 0) {
                    kt = 0;
                    break;
                }
                j++;
            }
        } else {
           kt = 0;
        }
        if(kt == 1) {
            document.write(i + " ");
            count++;
        }
       i++;
    }
}


