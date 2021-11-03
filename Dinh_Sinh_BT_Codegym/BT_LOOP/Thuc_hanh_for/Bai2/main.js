let num = Number(prompt("Nhập vào một số bất kì lớn hơn 0"));
let total = 0;

if(num > 0) {
    for(let i = 0 ; i <= num ; i++) {
        total += i;
    }
}

document.getElementById("demo").innerHTML = `Tổng từ 1 đến ${num} là ${total}`; 