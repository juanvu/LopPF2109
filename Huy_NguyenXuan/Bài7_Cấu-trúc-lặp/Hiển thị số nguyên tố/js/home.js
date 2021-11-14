let indexGuess = Number(prompt("Nhập vào số lượng số nguyên tố mà bạn muốn xem (Tốc độ sẽ nhanh hơn khi dưới 100 số)"));

let snt = `<table border='1' width='300' cellspacing='0' cellpadding='3'>`;

function check(n) {
    let flag = true;
    if (n < 2){
        flag = false;
    }
    else{
        for (let i = 2; i < n; i++)
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
            snt += `<td> ${numStart} </td>`;
            i++;
        }
        numStart++;
        if(i > 20 &&  (i-1)%20 == 0) {
            snt += "</tr>";
        }
    }
    snt += `</table>`;
}

function start() {
    result();
    document.write(snt)
}