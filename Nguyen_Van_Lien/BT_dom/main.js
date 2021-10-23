let orgTop = 0;
let orgLeft = 0;
let orgRight = 0;
let orgBottom = 0;
const step = 19;


let navTop = function() {
    orgTop -= step;
    if (orgTop < 0) {
        orgTop = 0;
    }
    document.getElementById("tank").style.transform = 'rotate(360deg)';
    document.getElementById('tank').style['top'] = orgTop + 'px';
}
let navLeft = function() {
    orgLeft -= step;
    if (orgLeft < 0) {
        orgLeft = 0;
    }
    document.getElementById("tank").style.transform = 'rotate(-90deg)';
    document.getElementById('tank').style['left'] = orgLeft + 'px';
    
}
let navRight = function() {
    orgLeft += step;
    document.getElementById('tank').style['left'] = orgLeft + 'px';
    document.getElementById("tank").style.transform = 'rotate(90deg)';
    
}
let navBottom = function() {
    orgTop += step;
    document.getElementById('tank').style['top'] = orgTop + 'px';
    document.getElementById("tank").style.transform = 'rotate(180deg)';
    
}