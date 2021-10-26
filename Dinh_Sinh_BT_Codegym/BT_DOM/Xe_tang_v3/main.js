// display : initial (mặc định của thẻ)

let xTank = document.getElementById("tank").style;
let yTank = document.getElementById("tank").style;
let pos = 0;

let xBullet = document.getElementById("animate").style;
let yBullet = document.getElementById("animate").style;
xBullet["left"] = 0 + "px";
yBullet["top"] = 0 + "px";

// reset
function mouseReset() {
    alert("Quá trình tạo mới trò chơi đang diễn ra !!!");
    location.reload();
}

// boom
let xBoom = document.getElementById("boom").style;
let yBoom = document.getElementById("boom").style;
xBoom['left'] = (Math.floor(Math.random() * 10) + 1)*60 + "px";
yBoom['top'] = (Math.floor(Math.random() * 10) + 1)*60 + "px";

// tank
xTank["left"] = 0 + "px";
yTank["top"] = 0 + "px";

function mouseUp() {
    if(parseInt(yTank['top']) > 0) {
        yTank['top'] = parseInt(yTank['top']) - 60 + "px";
    }
    document.getElementById("tank").style.transform = 'rotate(360deg)';
    catchMouse();
    yBullet["top"] = yTank['top'];
    myMoveUp();
}
function mouseLeft() {
    if(parseInt(xTank['left']) > 0) {
        xTank['left'] = parseInt(xTank['left']) - 60 + "px";
    }
    document.getElementById("tank").style.transform = 'rotate(-90deg)';
    catchMouse();
    xBullet["left"] = xTank['left'];
    myMoveLeft();
}
function mouseRight() {
    if(parseInt(xTank['left']) < 600) {
        xTank['left'] = parseInt(xTank['left']) + 60 + "px";
    }
    document.getElementById("tank").style.transform = 'rotate(90deg)';
    catchMouse();
    xBullet["left"] = xTank['left'];
    myMoveRight();
}
function mouseDown() {
    if(parseInt(yTank['top']) < 600) {
        yTank['top'] = parseInt(yTank['top']) + 60 + "px";
    }
    document.getElementById("tank").style.transform = 'rotate(180deg)';
    catchMouse();
    yBullet["top"] = yTank['top'];
    myMoveDown();
}

// logic
function catchMouse () {
    if(parseInt(xTank['left']) == parseInt(xBoom['left']) && parseInt(yTank['top']) == parseInt(yBoom['top'])) {
        document.getElementById('explosion').style.display = "block";
        document.getElementById('tank').style.display = "none";
        document.getElementById('boom').style.display = "none";
        document.getElementById('animate').style.display = "none";
        alert("Bạn đã thua cuộc rồi, bạn chơi gà quá");
    }
}

function winner () {
    if(parseInt(xBullet['left']) == parseInt(xBoom['left']) && parseInt(yBullet['top']) == parseInt(yBoom['top'])) {
        alert("Chúc mừng bạn đã giành chiến thắng");
    }
}

function myMoveDown() {
    pos = parseInt(yBullet["top"]);
    let id = null;  
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 600) {
        clearInterval(id);
        xBullet["left"] = xTank['left'];
        yBullet["top"] = yTank['top'];
      } else {
        pos+= 10; 
        yBullet["top"] = pos + "px"; 
      }
      winner();
    }
  }
  function myMoveUp() {
    pos = parseInt(yBullet["top"]);
    let id = null;  
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
        xBullet["left"] = xTank['left'];
        yBullet["top"] = yTank['top'];
      } else {
        pos-= 10; 
        yBullet["top"] = pos + "px"; 
      }
      winner();
    }
  }
  function myMoveRight() {
    pos = parseInt(xBullet["left"]);
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 600) {
        clearInterval(id);
        xBullet["left"] = xTank['left'];
        yBullet["top"] = yTank['top'];
      } else {
        pos+= 10; 
        xBullet["left"] = pos + "px"; 
      }
      winner();
    }
  }
  function myMoveLeft() {
    pos = parseInt(xBullet["left"]);
    let id = null;   
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
        xBullet["left"] = xTank['left'];
        yBullet["top"] = yTank['top'];
      } else {
        pos-= 10; 
        xBullet["left"] = pos + "px"; 
      }
      winner();
    }
  }