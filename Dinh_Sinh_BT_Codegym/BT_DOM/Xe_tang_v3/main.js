// display : initial (mặc định của thẻ)

// tank
let xTank = document.getElementById("tank").style;
let yTank = document.getElementById("tank").style;
xTank["left"] = 0 + "px";
yTank["top"] = 0 + "px";

// Bullet
let xBullet = document.getElementById("bullet").style;
let yBullet = document.getElementById("bullet").style;
xBullet["left"] = 0 + "px";
yBullet["top"] = 0 + "px";

// boom
let xBoom = document.getElementById("boom").style;
let yBoom = document.getElementById("boom").style;
xBoom['left'] = (Math.floor(Math.random() * 10) + 1)*60 + "px";
yBoom['top'] = (Math.floor(Math.random() * 10) + 1)*60 + "px";

function SetupBoom() {
  for(let i = 0 ; i < 10 ; i++) {

  }
}



// reset
function mouseReset() {
  alert("Quá trình tạo mới trò chơi đang diễn ra !!!");
  location.reload();
}

function mouseUp() {
    if(parseInt(yTank['top']) > 0) {
        yTank['top'] = parseInt(yTank['top']) - 60 + "px";
    }
    document.getElementById("tank").style.transform = 'rotate(360deg)';
    loser();
    yBullet["top"] = yTank['top'];
    myMoveUp();
}
function mouseLeft() {
    if(parseInt(xTank['left']) > 0) {
        xTank['left'] = parseInt(xTank['left']) - 60 + "px";
    }
    document.getElementById("tank").style.transform = 'rotate(-90deg)';
    loser();
    xBullet["left"] = xTank['left'];
    myMoveLeft();
}
function mouseRight() {
    if(parseInt(xTank['left']) < 600) {
        xTank['left'] = parseInt(xTank['left']) + 60 + "px";
    }
    document.getElementById("tank").style.transform = 'rotate(90deg)';
    loser();
    xBullet["left"] = xTank['left'];
    myMoveRight();
}
function mouseDown() {
    if(parseInt(yTank['top']) < 600) {
        yTank['top'] = parseInt(yTank['top']) + 60 + "px";
    }
    document.getElementById("tank").style.transform = 'rotate(180deg)';
    loser();
    yBullet["top"] = yTank['top'];
    myMoveDown();
}

// logic
function conditionLoser () {
  return parseInt(xTank['left']) == parseInt(xBoom['left']) && parseInt(yTank['top']) == parseInt(yBoom['top']);
}
function conditionWinner() {
  if(!conditionLoser()){
    return parseInt(xBullet['left']) == parseInt(xBoom['left']) && parseInt(yBullet['top']) == parseInt(yBoom['top']);
  }
}
function loser () {
    if(conditionLoser()) {
        document.getElementById('explosion').style.display = "initial";
        document.getElementById('tank').style.display = "none";
        document.getElementById('boom').style.display = "none";
        document.getElementById('bullet').style.display = "none";
        alert("Bạn đã thua cuộc rồi, bạn chơi gà quá");
    }
}

function winner () {
    if(conditionWinner()) {
      document.getElementById('winner').style.display = "initial";
      document.getElementById('tank').style.display = "none";
      document.getElementById('boom').style.display = "none";
      document.getElementById('bullet').style.display = "none";
      alert("Chúc mừng bạn đã giành chiến thắng");
    }
}


function getAdressBullet() {
  xBullet["left"] = xTank['left'];
  yBullet["top"] = yTank['top'];
}
function myMoveDown() {
  pos = parseInt(yBullet["top"]);
  let id = null;  
  clearInterval(id);
  id = setInterval(frame, 2);
  function frame() {
    if (pos == 600) {
      clearInterval(id);
      getAdressBullet();
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
  id = setInterval(frame, 2);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
      getAdressBullet();
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
  id = setInterval(frame, 2);
  function frame() {
    if (pos == 600) {
      clearInterval(id);
      getAdressBullet();
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
  id = setInterval(frame, 2);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
      getAdressBullet();
    } else {
      pos-= 10; 
      xBullet["left"] = pos + "px"; 
    }
    winner();
  }
}

document.onkeydown = function(press) {
  switch(press.which) {
      case 37: mouseLeft();
      break;

      case 38: mouseUp(); 
      break;

      case 39: mouseRight();
      break;

      case 40: mouseDown();
      break;

      case 13: mouseReset();
      break;
  }
  e.preventDefault(); 
};