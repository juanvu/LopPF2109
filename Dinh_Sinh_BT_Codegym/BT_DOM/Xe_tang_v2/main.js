let xTank = document.getElementById("tank").style;
let yTank = document.getElementById("tank").style;

// reset
function mouseReset() {
    alert("Quá trình tạo mới trò chơi đang diễn ra !!!");
    location.reload();
}

// boom
let xBoom = document.getElementById("boom").style;
let yBoom = document.getElementById("boom").style;
xBoom['left'] = (Math.floor(Math.random() * 20) + 1)*30 + "px";
yBoom['top'] = (Math.floor(Math.random() * 20) + 1)*30 + "px";

// tank
xTank["top"] = 0 + "px";
yTank["left"] = 0 + "px";

function mouseUp() {
    yTank['top'] = parseInt(yTank['top']) - 30 + "px";
    catchMouse();
}
function mouseLeft() {
    xTank['left'] = parseInt(xTank['left']) - 30 + "px";
    catchMouse();
}
function mouseRight() {
    xTank['left'] = parseInt(xTank['left']) + 30 + "px";
    catchMouse();
}
function mouseDown() {
    yTank['top'] = parseInt(yTank['top']) + 30 + "px";
    catchMouse();
}

// logic
function catchMouse () {
    if(parseInt(xTank['left']) == parseInt(xBoom['left']) && parseInt(yTank['top']) == parseInt(yBoom['top'])) {
        document.getElementById('explosion').style.display = "block";
        document.getElementById('tank').style.display = "none";
        document.getElementById('boom').style.display = "none";
        alert("Bạn đã thua cuộc rồi, bạn chơi gà quá");
    }
}
