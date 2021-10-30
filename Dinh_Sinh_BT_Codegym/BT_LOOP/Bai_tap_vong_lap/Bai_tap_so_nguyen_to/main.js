let indexGuess = Number(prompt("Nhập vào số lượng số nguyên tố mà bạn muốn xem (Tốc độ sẽ nhanh hơn khi dưới 100 số)"));

let snt = "";

function check(n) {
    let flag = true;
    if (n < 2){
        flag = false;
    }
    else{
        for (let i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
    return flag;
}

function result() {
    let i = 1;
    let numStart = 2;
    while(i <= indexGuess) {
        if (check(numStart)) {
            snt += numStart + " ";
            i++;
        }
        numStart++;
        
    }
}

function start() {
    result();
    document.getElementById("snt").innerHTML = snt;
}