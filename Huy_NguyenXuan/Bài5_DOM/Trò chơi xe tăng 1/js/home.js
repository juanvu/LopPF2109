function mouseUp() {
    document.getElementById("tank").style["top"] = parseInt(document.getElementById("tank").style["top"]) - 19 + "px";
    // yTank['top'] = parseInt(yTank['top']) - 19 + "px";
}
function mouseLeft() {
    document.getElementById("tank").style["left"] = parseInt(document.getElementById("tank").style["left"]) - 19 + "px"
    // xTank['left'] = parseInt(xTank['left']) - 19 + "px";
}
function mouseRight() {
    document.getElementById("tank").style["left"] = parseInt(document.getElementById("tank").style["left"]) + 19 + "px";
    // xTank['left'] = parseInt(xTank['left']) + 19 + "px";
}
function mouseDown() {
    document.getElementById("tank").style["top"] = parseInt(document.getElementById("tank").style["top"]) + 19 + "px";
    // yTank['top'] = parseInt(yTank['top']) + 19 + "px";
}