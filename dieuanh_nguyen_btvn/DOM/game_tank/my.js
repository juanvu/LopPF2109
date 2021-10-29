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
    top:0,
    deg: 0
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
    document.getElementById("tank").style = "";
    document.getElementById("boom").style = "";
    end = false;
    shot = false;
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
    move(0,"top",true);    
}

function moveLeft(){
    move(270,"left",true);
}

function moveRight(){
    move(90,"left",false);
}

function moveDown(){
    move(180,"top",false);
} 

function move(deg,pos,negative){
    if (!end){
        if ( position.deg !== deg){
            position.deg = deg;
            document.getElementById("tank").style["transform"] = "rotate("+position.deg+"deg)";
        }
        else{
            if((position[pos] < 450 && !negative) || (position[pos] >=50 && negative)){
                position[pos] += (negative?-50:50); 
                position[pos] = Math.max(0,Math.min(450,position[pos]));
                document.getElementById("tank").style[pos] = position[pos] + "px";
            }
        }
        explosion();
    }
}

function explosion(){
    if((position.left === boom.left)&&(position.top === boom.top)){
        document.getElementById("tank").style["background"] = "url(explosion.png)";
        document.getElementById("boom").style["display"] = "none";
        end = true;
        // ham setTimout: muon thuc hien function ben trong sau khoang thoi gian 500ms
        setTimeout(function(){ 
            alert("Ban da thua cuoc !");
            startgame();
        },500);
    }
}
/**
 * Ham nay de check khi nao vien dan di toi vien cua Boardgame de sau do lam vien dan bien mat
 * @param {*} pos 
 * @param {*} size 
 * @returns 
 */
function checkTouchBorder(pos,size){
    console.log(pos,size);
    return pos.left<=0 || (pos.left+size.width>=500) || pos.top<=0 || (pos.top+size.height>=500);
}

/**
 * Ham nay de xet xem vi tri cua vien dan o thoi diem bat ki co cham qua boom hay khong, voi cac toa do sau:
 * Check xem qua boom va vien dan se co mot toa do co it nhat 1 diem chung
 * Phai check cac truong hop voi toa do min va max cua vien dan va qua boom: max = toa do + size cua qua boom/ vien dan
 * @param {*} pos - vi tri o thoi diem t cua vien dan
 * @param {*} size - chieu dai, va chieu cao cua vien dan
 * @return
 */
function checkTouchBoom(pos,size){
    return ((pos.left<=boom.left && pos.left+size.width>=boom.left) || (pos.left>=boom.left && pos.left+size.width<=boom.left+50) || (pos.left<=boom.left+50 && pos.left+size.width>=boom.left+50)) && ((pos.top<=boom.top && pos.top+size.height>=boom.top) || (pos.top>=boom.top && pos.top+size.height<=boom.top+50) || (pos.top<=boom.top+50 && pos.top+size.height>=boom.top+50));
}
/**
 * Ham nay dung de check dieu kien khi nao thi vien dan duoc ban ra (khi chua ket thuc game) va duong di cua vien dan
 * @param {`bool`} checked 
 * @returns 
 */
function shoot(checked = false){
    // Neu (chua ket thuc game & (khi vien dan chua duoc ban ra hoac khi muon check vi tri vien dan))
    if (!end && (!shot || checked)){ 
        let bulletElem = document.getElementById("bullet");
        let boomElem = document.getElementById("boom");
        if (!shot){
            shot = true;
            bullet.top = position.top+20;
            bullet.left = position.left+20;
            bullet.deg = position.deg;
            checked = true;
        }
        if (checked){
            const borderTouched = checkTouchBorder(bullet,bulletSize);
            if(!borderTouched){
                const boomTouched = checkTouchBoom(bullet,bulletSize);
                if (boomTouched){
                    boomElem.style.background = "url(/explosion.png)";
                    end = true;
                    setTimeout(function(){
                        alert("Ban da gianh chien thang !");
                        startgame();
                    },500);
                }
                else{
                    bullet.top += (bullet.deg%360 === 0?-50:(bullet.deg%360 === 180?50:0)); // xet su dich chuyen cua vien dan theo truc y: (neu xe tank dang huong len tren goc 0 deg thi duong di cua vien dan se phai giam xuong 50px); (neu xe tank dang huong xuong duoi goc 180 do thi duong di cua vien dan se phai tang len 50px) 
                    bullet.top = Math.max(0,Math.min(bullet.top, 490)); // xet khi nao vien dan cham vien thi phai lam cho vien dan chi dung lai o vien (vi tri khong vuot ra khoi boardgame) -> vi tri se fix max la 490 (boardgame =500, vien dan =10)
                    bullet.left += (bullet.deg%360 === 90?50:(bullet.deg%360 === 270?-50:0));
                    bullet.left = Math.max(0,Math.min(bullet.left, 490));
                    bulletElem.style.display = "initial"; // vi ben css dang de display none (vien dan bi an khi chua duoc ban ra) nen can them vao de hien ra vien dan
                    bulletElem.style.left = bullet.left + "px";
                    bulletElem.style.top = bullet.top + "px";
                    // setTimeout: cu 100mseconde se xet vi tri vien dan dich chuyen 50
                    setTimeout(function(){
                        shoot(true);
                    },100);
                    return;
                }
            }
            bulletElem.style.display = "none"; // khi vien dan cham vien hoac khi vien dan trung qua boom thi display = none de cho vien dan bien mat
            shot = false; // de cho tank ban duoc tiep dan
        }
    }
}

startgame();
window.addEventListener("keydown",function(e){
    e.preventDefault();
    switch(e.keyCode){
        case 32: // space
            shoot();
            break;
        case 37: // left
            moveLeft();
            break;
        case 38: // up
            moveUp();
            break;
        case 39: // right
            moveRight();
            break;
        case 40: // down
            moveDown();
            break;
        default:
            break;
    }
});
