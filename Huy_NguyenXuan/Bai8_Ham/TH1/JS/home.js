// let x=0;
// let array = Array();
// function add_element_to_array() {
//     array[x] = document.getElementById('txtValue').value;
//     alert("Element: " + array[x] + " Added at index " + x);
//     x++;
//     document.getElementById('txtValue').value='';
// }
// function display_array() {
//     let e = "</hr>";
//     for (let i =0; i < array.length;i++) {
//         e += "Element " + i + " = " + array[i] + "</br>";
//     }
//     document.getElementById("showResult").innerHTML = e;
// }

let x =0;
let array = Array();
function add_element() {
    array[x] = document.getElementById('txtValue').value;
    alert("Element: " + array[x] + " add at index " + x);
    x++;
    document.getElementById('txtValue').value='';
}
function display_element() {
    let e ="<hr/>";
    for (let i=0; i < array.length;i++) {
        e += "Element " + i + ' = ' + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}