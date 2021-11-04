let x = 0;
let array = Array();

function addTxt() {
    array[x] = document.getElementById('inputText').value;
    alert("Element: " + array[x] + "Added text index" + x);
    x++;
    document.getElementById('inputText').value;
}

function displayTxt() {
    let e = "<hr/>";
    for ( let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById('result').innerHTML = e;
}