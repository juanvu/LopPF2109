function _thisMonth() {
    let thisMonth = document.getElementById("thisMonth").value;
    return thisMonth;
}
document.getElementById("thisMonth").innerHTML += thisMonth;
let display = function() {
    let _display = document.getElementById('display');
    let money = document.getElementById("money").value;
    let dob = document.getElementById("dob").value.split("-");
    let month = dob[1];
    let result = 0;
    thisMonth = _thisMonth()
    if (thisMonth == month && money > 500000) {
        result = money - (money * 0.3);
    } else if (money > 400000) {
        result = money - (money * 0.2);
    } else if (thisMonth == month && money > 200000) {
        result = money - (money * 0.25);
    } else result = money;
    _display.value = "";
    _display.value = result;
}
let reset = function () {
    location.reload();
}