let xTank = document.getElementById("tank").style;
let yTank = document.getElementById("tank").style;

xTank["top"] = 0 + "px";
yTank["left"] = 0 + "px";

function mouseUp() {
    yTank['top'] = parseInt(yTank['top']) - 19 + "px";
}
function mouseLeft() {
    xTank['left'] = parseInt(xTank['left']) - 19 + "px";
}
function mouseRight() {
    xTank['left'] = parseInt(xTank['left']) + 19 + "px";
}
function mouseDown() {
    yTank['top'] = parseInt(yTank['top']) + 19 + "px";
}
