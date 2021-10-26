let orgTop = 0;
let orgLeft = 0;

const step = 19;


function moveUp() {
    orgTop -= step;
    if (orgTop < 0) {
        orgTop = 0;
    }
    document.getElementById('tank').style['top'] = orgTop + 'px';
    catchmove();
}

function moveLeft() {
    orgLeft -= step;
    if (orgLeft < 0) {
        orgLeft = 0;
    }
    document.getElementById('tank').style.transform = 'rotate(-90deg)';
    document.getElementById('tank').style['left'] = orgLeft + 'px';
    catchmove();
}

function moveRight() {
    orgLeft += step;
    document.getElementById('tank').style.transform = 'rotate(90deg)';
    document.getElementById('tank').style['left'] = orgLeft + 'px';
    catchmove()
}

function moveDown() {
    orgTop += step;
    document.getElementById('tank').style.transform = 'rotate(180deg)';
    document.getElementById('tank').style['top'] = orgTop + 'px';
    catchmove();
}

function catchmove() {
    if (orgTop == 76 && orgLeft == 133) {
        document.getElementById('bomm').style.backgroundImage = "url('./explosion.png')";
        document.getElementById('bomm').style.backgroundSize = "100% 100%";
    }
}