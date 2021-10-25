let xTank = document.getElementById("tank").style;
let yTank = document.getElementById("tank").style;
xTank['left'] = 0 + "px";
yTank['top'] = 0 + "px";
const step = 19;
xTankVal = parseInt(xTank['left']);
yTankVal = parseInt(yTank['top']);
let xBoom = document.getElementById("boom").style;
let yBoom = document.getElementById("boom").style;
// xBoom['left'] = (Math.floor(Math.random() * 10 + 1) * 36) + "px";
// yBoom['top'] = (Math.floor(Math.random() * 10 + 1) * 36) + "px";
xBoom['left'] = (Math.floor(Math.random() * 20) * 19) + "px";
yBoom['top'] = (Math.floor(Math.random() * 20) * 19) + "px";


document.onkeydown = function(e) {
    switch(e.which) {
        case 37: // left
            left();
        break;

        case 38: // up
            up();
        break;

        case 39: // right
            right();
        break;

        case 40: // down
            down();
        break;
    }
}

function Reset() {
    if (confirm("Bạn có muốn chơi lại?")) {
        location.reload();
    }
}

let up = function() {
    yTankVal -= step;
    if (yTankVal < 0) {
        yTankVal = 0;
    }
    if (yTankVal > 361) {
        yTankVal = 361;
    }
    yTank.transform = 'rotate(0)';
    yTank['top'] =  yTankVal + 'px';
    die();
}
let left = function() {
    xTankVal -= step;
    if (xTankVal < 0) {
        xTankVal = 0;
    }
    if (xTankVal > 361) {
        xTankVal = 361;
    }    
    xTank.transform = 'rotate(-90deg)';
    xTank['left'] = xTankVal + 'px';
    die();
}
let right = function() {
    xTankVal += step;
    if (xTankVal < 0) {
        xTankVal = 0;
    }
    if (xTankVal > 361) {
        xTankVal = 361;
    } 
    xTank['left'] = xTankVal + 'px';
    xTank.transform = 'rotate(90deg)';
    die();
}
let down = function() {
    yTankVal += step;
    if (yTankVal < 0) {
        yTankVal = 0;
    }
    if (yTankVal > 361) {
        yTankVal = 361;
    }
    yTank['top'] = yTankVal + 'px';
    yTank.transform = 'rotate(180deg)';
    die();
}

function die() {
    if(xTankVal === parseInt(xBoom['left']) && yTankVal === parseInt(yBoom['top'])) {
        document.getElementById('tank').style.display = "none";
        document.getElementById('boom').style.display = "none";
        document.getElementById('end').style.display = "initial";
        document.getElementById('explosion').style['left'] = xBoom['left'];
        document.getElementById('explosion').style['top'] = yBoom['top'];
        document.getElementById('explosion').style.display = "initial";
    }
}