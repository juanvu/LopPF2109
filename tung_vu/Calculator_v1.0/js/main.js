const display = document.getElementById('display');
let numberInput = function(num) {
	let displayVal = display.value;
	let newVal = displayVal + num;
	display.value = newVal;
}

let operaInput = function(opera) {
	let displayVal = display.value;
	let newVal = displayVal + opera;
	display.value = newVal;
}

let showResult = function(){
	let displayVal = display.value;
	let result = eval(displayVal);
    display.value = result;
}

let showMath = function (operator) {
    switch (operator) {
        case "sin":
            display.value += "Math.sin(";
            break;
        case "cos":
            display.value += "Math.cos(";
            break;
        case "tan":
            display.value += "Math.tan(";
            break;
        case "Can":
            display.value += "Math.sqrt(";
            break;
        case "EXP":
            display.value += "Math.exp(";
            break;
        case "x^y":
            display.value += "Math.pow(";
            break;
        case "log":
            display.value += "Math.log(";
            break;
        case "e":
            display.value += Math.E;
            break;
        case "π":
            display.value += Math.PI;
            break;
        case "ln":
            display.value += Math.LN10;
            break;
    }
}

let AC = function () {
    display.value = "";
}
