let position = {
    left:0 , 
    top:0,
    deg: 0
};
let boom = {
    left:0,
    top:0
}
let bullet = {
    left:0,
    top:0
}
const bulletSize = {
    width: 10,
    height: 10
}
let end = false;
let shot = false;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  
function startgame(){
    position = {
        left: getRandomInt(9)*50,
        top: getRandomInt(9)*50,
        deg: 0
    }
    do{
        boom = {
            left: getRandomInt(9)*50,
            top: getRandomInt(9)*50
        }
    }
    while ((position.left === boom.left)&&(position.top === boom.top))
    document.getElementById("tank").style["left"] = position.left + "px";
    document.getElementById("tank").style["top"] = position.top + "px";
    document.getElementById("boom").style["top"] = boom.top + "px";
    document.getElementById("boom").style["left"] = boom.left + "px";
    document.getElementById("tank").style["display"] = "initial";
    document.getElementById("boom").style["display"] = "initial";
}
function moveUp(){
    if(!end){
        if(position.top > 0){
            position.top -= 50; 
            document.getElementById("tank").style["top"] = position.top + "px";
        }
        document.getElementById("tank").style["transform"] = "rotate(0deg)";
        position.deg = 0;
        explosion();
    }

    
}

function moveLeft(){
    if(!end){
        if(position.left > 0){
            position.left -= 50; 
            document.getElementById("tank").style["left"] = position.left + "px";
        }
        document.getElementById("tank").style["transform"] = "rotate(-90deg)";
        position.deg = -90;
        explosion();
    }
}

function moveRight(){
    if(!end){
        if(position.left < 450){
            position.left += 50; 
            document.getElementById("tank").style["left"] = position.left + "px";
        }
        document.getElementById("tank").style["transform"] = "rotate(90deg)";
        position.deg = 90;
        explosion();
    }
    
}

function moveDown(){
    if(!end){
        if(position.top < 450){
            position.top += 50; 
            document.getElementById("tank").style["top"] = position.top + "px";
        }
        document.getElementById("tank").style["transform"] = "rotate(180deg)";
        position.deg = 180;
        explosion();
    }
} 
function explosion(){
    if((position.left === boom.left)&&(position.top === boom.top)){
        document.getElementById("tank").style["background"] = "url(/explosion.png)";
        document.getElementById("boom").style["display"] = "none";
        end = true;
    }
}

function checkTouchBorder(pos,size){
    console.log(pos);
    return pos.left<=0 || (pos.left+size.width>=500) || pos.top<=0 || (pos.top+size.height>=500);
}

function checkTouchBoom(pos,size){
    console.log("bullet",pos);
    return ((pos.left<=boom.left && pos.left+size.width>=boom.left) || (pos.left>=boom.left && pos.left+size.width<=boom.left+50) || (pos.left<=boom.left+50 && pos.left+size.width>=boom.left+50)) && ((pos.top<=boom.top && pos.top+size.height>=boom.top) || (pos.top>=boom.top && pos.top+size.height<=boom.top+50) || (pos.top<=boom.top+50 && pos.top+size.height>=boom.top+50));
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function shoot(){
    let bulletElem = document.getElementById("bullet");
    let boomElem = document.getElementById("boom");
    if (!shot){
        shot = true;
        bullet.top = position.top+20;
        bullet.left = position.left+20;
        console.log(bullet);
        do {
            console.log(position.deg);
            bullet.top += (position.deg === 0?-50:(position.deg === 180?50:0));
            bullet.left += (position.deg === 90?50:(position.deg === -90?-50:0));
            document.getElementById("bullet").style.display = "initial";
            document.getElementById("bullet").style.left = bullet.left + "px";
            document.getElementById("bullet").style.top = bullet.top + "px";
            sleep(1000);
            if (checkTouchBoom(bullet,bulletSize)){
                alert("Win !");
                boomElem.style.display = "none";
                document.getElementById("bullet").style.display = "none";
                shot = false;
                break;
            }
            else{
                sleep(1000);
            }
        }
        while(!checkTouchBorder(bullet,bulletSize));
        document.getElementById("bullet").display = "none";
        shot = false;
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }