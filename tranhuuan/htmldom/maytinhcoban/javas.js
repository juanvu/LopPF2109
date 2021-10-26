function myfunction(operato) {
    let Num1val = document.getElementById("so1").value;
    let Num2val = document.getElementById("so2").value;
    let kqVal;
    debugger;
    if (isNaN(Num1val) || isNaN(Num2val)) {
        alert("nhập số !");
    } else {
        switch (operato) {
            case "+":
                kqVal = parseInt(Num1val) + parseInt(Num2val);
                document.getElementById('kq').innerHTML = "<input type='text' value=" + kqVal + ">";
                break;
            case "-":
                kqVal = parseInt(Num1val) - parseInt(Num2val);
                document.getElementById('kq').innerHTML = "<input type='text' value=" + kqVal + ">";
                break;
            case "x":
                kqVal = parseInt(Num1val) * parseInt(Num2val);
                document.getElementById('kq').innerHTML = "<input type='text' value=" + kqVal + ">";
                break;
            case ":":
                kqVal = parseInt(Num1val) / parseInt(Num2val);
                document.getElementById('kq').innerHTML = "<input type='text' value=" + kqVal + ">";
                break;
        }
    }
}