let x = 0;
let y = 0;
const step = 19;

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

let up = function() {
    x -= step;
    if (x < 0) {
        x = 0;
    }
    if (x > 181) {
        x = 181;
    }
    document.getElementById("tank").style.transform = 'rotate(0)';
    document.getElementById('tank').style['top'] = x + 'px';
}
let left = function() {
    y -= step;
    if (y < 0) {
        y = 0;
    }
    if (y > 171) {
        y = 171;
    }    
    document.getElementById("tank").style.transform = 'rotate(-90deg)';
    document.getElementById('tank').style['left'] = y + 'px';
    
}
let right = function() {
    y += step;
    if (y < 0) {
        y = 0;
    }
    if (y > 171) {
        y = 171;
    } 
    document.getElementById('tank').style['left'] = y + 'px';
    document.getElementById("tank").style.transform = 'rotate(90deg)';
    
}
let down = function() {
    x += step;
    if (x < 0) {
        x = 0;
    }
    if (x > 171) {
        x = 171;
    }
    document.getElementById('tank').style['top'] = x + 'px';
    document.getElementById("tank").style.transform = 'rotate(180deg)';
}