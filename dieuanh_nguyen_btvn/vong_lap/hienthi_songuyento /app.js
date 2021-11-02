function inputPrimeNumber(){
    const numbers = parseInt(prompt("Nhap so so nguyen to can hien thi: "));
    if (isNaN(numbers) || numbers<=0){
        alert("Vui long nhap 1 so nguyen lon hon 0");
    }
    else{
        displayPrimeNumber(numbers);
    }
}

function displayPrimeNumber(numbers){
    let n = 2;
    let count = 0;
    $("#prime-numbers").empty();
    while (count<numbers){
        if (isPrime(n)){
            $("#prime-numbers").append($("<li></li>").text(n));
            count++;
        }
        n++;
    }
}

function isPrime(n){
    if (n === 2){
        return true;
    }
    else{
        for (let i = 2; i<=n/2;i++){
            if (n%i===0){
                return false;
            }
        }
    }
    return true;
}