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
xBoom['left'] = (Math.floor(Math.random() * 10))*60 + "px";
yBoom['top'] = (Math.floor(Math.random() * 10))*60 + "px";

// tank
xTank['top'] = 0 + "px";
yTank['left'] = 0 + "px";

function mouseUp() {
    yTank['top'] = parseInt(yTank['top']) - 60 + "px";
    document.getElementById("tank").style.transform = 'rotate(360deg)';
    catchMouse();
}
function mouseLeft() {
    xTank['left'] = parseInt(xTank['left']) - 60 + "px";
    document.getElementById("tank").style.transform = 'rotate(-90deg)';

    catchMouse();
}
function mouseRight() {
    xTank['left'] = parseInt(xTank['left']) + 60 + "px";
    document.getElementById("tank").style.transform = 'rotate(90deg)';

    catchMouse();
}
function mouseDown() {
    yTank['top'] = parseInt(yTank['top']) + 60 + "px";
    document.getElementById("tank").style.transform = 'rotate(180deg)';

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
