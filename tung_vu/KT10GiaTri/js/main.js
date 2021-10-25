let showResult = function() {
    let elements = document.getElementsByClassName("input");
    let result = document.getElementById("result");
    result.innerHTML = 
    `Kết quả là:
    <br> 
    `
    let el = elements.length;
    for (var element of elements) {
        var value = element.value;
        if (/^[a-zA-Z]/.test(value)) {
            let _value = "";
            for (let i = 1; i < value.length; i++) {
                _value += value[i];
            }
            let firstChar = value.charAt(0);
            value = firstChar.toUpperCase() + _value;
            result.innerHTML += (value + "  ");
        }
    }
}




