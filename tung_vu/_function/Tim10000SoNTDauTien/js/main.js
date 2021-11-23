let Arr = [];
let str = "";
addArr();

function OK() {
    dispArr(Arr);
}

function dispArr(arr) {
    for (var i = 0; i < arr.length; ++i) {
        str += arr[i] + " ";
        if(i%10==9){
            str += "\<br\>";
        }
    }
    if(i%10!=0){
        str += "\<br\>";
    }
    document.write(`${str}`);
}

function addArr() {
    for (let i = 2; i < 301; i++) {
        if (check(i)) {
            Arr.push(i);
        }
    }
}

function check(num) {
    let count = 0;
    for (let i = 2; i <= Math.sqrt(num) ; i++) {
        if (num % i == 0) {
            count = 0;
            return false;
        } else return true;
    }
}

