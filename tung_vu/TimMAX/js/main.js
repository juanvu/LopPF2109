let showResult = function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    let max = num1;
    if (max < num2) {
        max = num2;
    }
    if (max < num3) {
        max = num3;
    }
    document.getElementById("result").innerHTML += max;
}
