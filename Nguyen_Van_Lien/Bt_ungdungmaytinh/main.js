const numbers = document.getElementsByClassName("button");
const result = document.getElementById("result");

for(let number of numbers) {
    number.addEventListener('click', function () {
        result.innerHTML += this.value;
    });
}

function calculate() {
    let cal = result.innerHTML;
    let output = eval(cal);
    result.innerHTML = output;
}

function deleteChar() {
    let cal = result.innerHTML;
    result.innerHTML = cal.substring(0, cal.length-1);
}

function clearAll() {
    result.innerHTML = "";
}