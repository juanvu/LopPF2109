let index = 0;
let array = [];

function add_element_to_array() {
    array[index] = document.getElementById("txtValue").value;
    alert("Element: " + array[index] + " added at index " + index);
    index++;
    document.getElementById("txtValue ").value = "";
}

function display_array() {
    let e = "<hr/>";
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}