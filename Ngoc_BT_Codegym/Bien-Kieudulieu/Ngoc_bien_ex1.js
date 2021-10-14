let inputYYYY;
let inputMM;
let inputDD;

inputYYYY = prompt("Enter the year");
inputMM = prompt("Enter the month");
inputDD = prompt("Enter the day")

let year = parseInt(inputYYYY);
let month = parseInt(inputMM);
let day = parseInt(inputDD)

let ngày = inputDD + "-" + inputMM + "-" + inputYYYY;
document.write("Today is: " + ngày);