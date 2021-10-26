let numA = Number(prompt("Mời bạn nhập số A"));
let numB = Number(prompt("Mời bạn nhập số B"));
let numC = Number(prompt("Mời bạn nhập số C"));
if (numA >= numB) {
    if (numA >= numC) {
        alert("A là số lớn nhất");
    }   else {
        alert("C là số lớn nhất");
    }
}   else {
    if (numB >= numC) {
        alert("B là số lớn nhất");
    }   else {
        alert("C là số lớn nhất");
    }
}