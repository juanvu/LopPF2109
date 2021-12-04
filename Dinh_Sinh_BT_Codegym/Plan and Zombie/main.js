const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 600;

// global variables
const cellSize = 100;
const cellGap = 3;
let numberOfResources = 300;
// Thời gian quái vật xuất hiện liên tiếp nhau
let enemiesInterval = 600;
// Tốc độ chạy của khung hình anh hùng 
let frame = 0;
let gameOver = false;
let score = 0;
const winningScore = 50;
let chosenDefender = 1;

const enemies = [];
const enemyPositions = [];
const gameGird = [];
const defenders = [];
const projectiles = [];
const resources = [];


// mouse
const mouse = {
    x: 10,
    y: 10,
    width: 0.1,
    height: 0.1,
    clicked: false,
}
canvas.addEventListener('mousedown', function() {
    mouse.clicked = true;
});

canvas.addEventListener('mouseup', function() {
    mouse.clicked = false;
});

let canvasPosition = canvas.getBoundingClientRect();
canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.x - canvasPosition.left;
    mouse.y = e.y - canvasPosition.top
});
canvas.addEventListener('mouseleave', function() {
    mouse.x = undefined;
    mouse.y = undefined;
})

// game board : Định nghĩa một hàng 
const controlsBar = {
    width: canvas.width,
    height: cellSize,
}
// Khởi tạo một class mỗi ô riêng biệt
class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
    }
    draw() {
        // Nếu có sự va chạm thì hiển thị ô di chuyển tới
        if(mouse.x && mouse.y && collision(this, mouse)) {
            ctx.strokeStyle = 'black';
            ctx.strokeRect(this.x, this.y, this.width, this.height); 
        }
    }
}
// Đưa các ô đã tạo vào mảng 
function createGird() {
    for(let y = cellSize ; y < canvas.height ; y+= cellSize) {
        for(let x = 0 ; x < canvas.width ; x+= cellSize) {
            gameGird.push(new Cell(x, y));
        }
    }
}
// Gọi hàm tạo bàn cờ 
createGird();
function handleGameGird() {
    for(let i = 0 ; i < gameGird.length ; i++) {
        gameGird[i].draw();
    }
}

// projectiles: đường đạn
class Projectile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.power = 20;
        this.speed = 5;
    }
    update() {
        this.x += this.speed;
    }
    draw() {
        ctx.fillStyle = 'black';
        ctx.beginPath();
        // Vẽ đạn bắn quái vật
        ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleProjectiles() {
    for(let i = 0 ; i < projectiles.length ; i++) {
        projectiles[i].update();
        projectiles[i].draw();

        for(let j = 0 ; j < enemies.length ; j++) {
            // nếu có đường đạn và quái vật và cớ sự va chạm với nhau thì máu của quái vật bị giảm
            // Khi giảm về 0 sẽ xóa quái vật đi
            if(enemies[j] && projectiles[i] && collision(projectiles[i], enemies[j])) {
                enemies[j].health -= projectiles[i].power;
                projectiles.splice(i, 1);
                i--;
            }
        }

        if(projectiles[i] && projectiles[i].x > canvas.width - cellSize) {
            projectiles.splice(i, 1);
            i--;
        }
    }
}
// defenders
const defender1 = new Image();
defender1.src = './img/defender1.png';
const defender2 = new Image();
defender2.src = './img/defender2.png';

class Defender {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // Dùng để fix khi quái vật tấn công anh hùng không bị ảnh hưởng đến anh hùng khác
        this.width = cellSize - cellGap * 2;
        this.height = cellSize - cellGap * 2;
        this.shooting = false;
        this.shootNow = false;
        this.health = 100;
        this.projectiles = [];
        this.timer = 0;  
        this.frameX = 0;
        this.frameY = 0;
        this.spriteWidth = 194;
        this.spriteHeight = 194;
        this.minFrame = 0;
        this.maxFrame = 16;
        this.chosenDefender = chosenDefender;
    }
    draw() {
        // ctx.fillStyle = 'blue';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'red';
        ctx.font = '30px Orbitron';
        ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        if(this.chosenDefender === 1) {
            ctx.drawImage(defender1, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }else if(this.chosenDefender === 2) {
            ctx.drawImage(defender2, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }

    }
    update() {
        // n càng nhỏ khung hình chạy càng nhanh đồng nghĩa với việc anh hùng bắn càng nhanh
        if(frame % 10 === 0) {
            if(this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = this.minFrame;
            if(this.frameX === 15) this.shootNow = true;
        }

        if(this.chosenDefender === 1) {
            if(this.shooting) {
                this.minFrame = 0;
                this.maxFrame = 16;
            }else {
                this.minFrame = 17;
                this.maxFrame = 24;
            }
        }else if(chosenDefender === 2) {
            if(this.shooting) {
                this.minFrame = 13;
                this.maxFrame = 28;
            }else {
                this.minFrame = 0;
                this.maxFrame = 12;
            }
        }
        if(this.shooting && this.shootNow) {
            projectiles.push(new Projectile(this.x + 70, this.y + 35));
            this.shootNow = false;
            // this.timer++;
            // if(this.timer % 100 === 0) {
                
            // }
        }
        // else {
        //     this.timer = 0;
        // }
    }
}

function handleDefenders() {
    for(let i = 0 ; i < defenders.length ; i++) {
        defenders[i].draw();
        defenders[i].update();
        if(enemyPositions.indexOf(defenders[i].y) !== -1) {
            defenders[i].shooting = true;
        }else {
            defenders[i].shooting = false;
        }
        for(let j = 0 ; j < enemies.length ; j++) {
            if(defenders[i] && collision(defenders[i], enemies[j])) {
                enemies[j].movement = 0;
                defenders[i].health -= 1;
            }
            if(defenders[i] && defenders[i].health <= 0) {
                defenders.splice(i, 1);
                i--;
                enemies[j].movement = enemies[j].speed;
            }
        }
    }
}

const card1 = {
    x: 10,
    y: 10,
    width: 70,
    height: 85,
}

const card2 = {
    x: 90,
    y: 10,
    width: 70,
    height: 85,
}
// Chọn anh hùng
function chooseDefender() {
    let card1stroke = 'black';
    let card2stroke = 'black';
    if(collision(mouse, card1) && mouse.clicked) {
        chosenDefender = 1;
    }else if(collision(mouse, card2)) {
        chosenDefender = 2;
    }
    // Thay đổi khung viền của ô lựa chọn anh hùng khi nhấp vào là vàng còn không là đen
    if(chosenDefender === 1) {
        card1stroke = 'gold';
        card2stroke = 'black';
    }else if(chosenDefender === 2) {
        card1stroke = 'black';
        card2stroke = 'gold';
    }else {
        card1stroke = 'black';
        card2stroke = 'black';
    }

    ctx.lineWidth = 1;
    // làm giảm độ sáng của nền mặc định trong menu chọn
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(card1.x, card1.y, card1.width, card1.height);
    ctx.strokeStyle = card1stroke;
    ctx.strokeRect(card1.x, card1.y, card1.width, card1.height);
    ctx.drawImage(defender1, 0, 0, 194, 194, 0 , 5, 194/2, 194/2);
    ctx.fillRect(card2.x, card2.y, card2.width, card2.height);
    ctx.strokeStyle = card2stroke;
    ctx.drawImage(defender2, 0, 0, 194, 194, 80 , 5, 194/2, 194/2);
    ctx.strokeRect(card2.x, card2.y, card2.width, card2.height);
}

// Floating Message
const floatingMessages = [];
// Khởi tạo class Message thông báo cho người chơi
class floatingMessage {
    constructor(value, x, y, size, color) {
        this.value = value;
        this.x = x;
        this.y = y;
        this.size = size;
        // Biến này có chức năng thay đổi thời gian còn hiện ở trên màn hình của message
        this.lifeSpan = 0;
        this.color = color;
        this.opacity = 1;
    }
    update() {
        this.y -= 0.3;
        this.lifeSpan += 1;
        // Có chức năng làm cho message như dần dần biến mất
        if(this.opacity > 0.01) this.opacity -= 0.01;
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.font = this.size + 'px Orbitron';
        ctx.fillText(this.value, this.x, this.y);
        // Đặt lại độ trong suốt của giao diện
        ctx.globalAlpha = 1;
    }
}
function handleFloatingMessages() {
    for(let i = 0 ; i < floatingMessages.length ; i++) {
        floatingMessages[i].update();
        floatingMessages[i].draw();
        // Nếu message > i, nếu i càng lớn thì thời gian xuất hiện càng lâu
        // Khi đó ta sẽ xóa đi message đó 
        if(floatingMessages[i].lifeSpan >= 50) {
            floatingMessages.splice(i, 1);
            i--;
        }
    }
}

// enemies
const enemyTypes = [];
const enemy1 = new Image();
enemy1.src = './img/enemy1.png'
enemyTypes.push(enemy1);
const enemy2 = new Image();
enemy2.src = './img/enemy2.png'
enemyTypes.push(enemy2);

// Khởi tạo một class Quái vật 
class Enemy {
    constructor(verticalPosition) {
        this.x = canvas.width;
        this.y = verticalPosition;
        this.width = cellSize - cellGap * 2;
        this.height = cellSize - cellGap * 2;
        this.speed = Math.random() * 0.2 + 0.4;
        this.movement = this.speed;
        this.health = 100;
        this.maxHealth = this.health;
        // Tạo ngẫu nhiên một quái vật trong mảng đã khai báo
        this.enemyType = enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
        this.frameX = 0;
        this.frameY = 0;
        this.minFrame = 0;
        // Vì ở đây có 2 quái vật mà khung hình của chúng khác nhau
        // Nên khi là quái vật 1 khung hình sẽ là 4 còn 2 sẽ là 7
        // Lưu ý khung hình chạy từ 0
        if(this.enemyType === enemy1) {
            this.maxFrame = 4;
        }else if(this.enemyType === enemy2) {
            this.maxFrame = 7;
        }
        // Chiều rộng và cao dựa vào kích thước của ảnh
        this.spriteWidth = 256;
        this.spriteHeight = 256;
    }
    update() {
        // Tọa độ của x sẽ thay đổi khi vị trí hiện tại của quái vật thay đổi
        this.x -= this.movement;
        if(frame % 10 === 0) {
            if(this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = this.minFrame;
        }
    }
    draw() {
        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'black';
        ctx.font = '30px Orbitron';
        ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
        // ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
        ctx.drawImage(this.enemyType, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

function handleEnemies() {
    for(let i = 0 ; i < enemies.length ; i++) {
        enemies[i].update();
        enemies[i].draw();
        // Nếu tọa độ x của quái vật nhỏ hơn 0, tức là quái vật đã vào nhà
        // Lúc này biến gameOver sẽ trở thành true và game kết thúc
        if(enemies[i].x < 0) {
            gameOver = true;
        }
        if(enemies[i].health <= 0) {
            let gaineResource = enemies[i].maxHealth/5;
            // Sau khi tiêu diệt được quái thì số tiền sẽ được cộng bằng 20% máu của quái vật
            // đồng thời số điểm cũng tăng tương ứng
            floatingMessages.push(new floatingMessage('+' + gaineResource, enemies[i].x, enemies[i].y, 30, 'black'));
            floatingMessages.push(new floatingMessage('+' + gaineResource, 470, 85, 30, 'gold'));
            numberOfResources += gaineResource;
            score += gaineResource/2;
            // Tìm quái vật ở vị trí i trong mảng để xóa bằng hàm indexOf rồi xóa đi bằng hàm splice
            const findThisIndex = enemyPositions.indexOf(enemies[i].y)
            enemyPositions.splice(findThisIndex, 1);
            enemies.splice(i, 1);
            i--;
        }
    }
    // Khi chưa chiến thắng quái vật sẽ xuất hiện cho đến khi nào người chơi vượt qua số điểm điều kiện
    // Khi vượt qua quái vật sẽ không xuất hiện nữa
    if(frame % enemiesInterval === 0 && score < winningScore) {
        // Quái vật sẽ xuất hiện ngẫu nhiên từ vị trí 1->5 , vị trí 0 bỏ qua vì là ô menu
        let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
        enemies.push(new Enemy(verticalPosition));
        enemyPositions.push(verticalPosition);
        // Tăng độ khó cho game :))
        // Độ khó của game thể hiện ở đây
        if(enemiesInterval > 120) enemiesInterval -= 50;
    }
}
// resouces
// Các nguồn tài nguyên có thể rơi ra khi chơi
const amounts = [20, 30, 40];
// Khởi tạo class Tài nguyên free
class Resource {
    constructor() {
        this.x = Math.random() * (canvas.width - cellSize);
        this.y = (Math.floor(Math.random() * 5) + 1) * cellSize + 25;
        this.width = cellSize * 0.6;
        this.height = cellSize * 0.6;
        this.amount = amounts[Math.floor(Math.random() * amounts.length)];
    }
    draw() {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'black';
        ctx.font = '20px Orbitron';
        ctx.fillText(this.amount, this.x + 15 , this.y + 25)
    }
}
function handleResources() {
    // Nếu n càng nhỏ thì thời gian ra tài nguyên càng nhanh
    // và chỉ rơi tài nguyên khi số điểm nhỏ hơn điều kiện chiến thắng
    if(frame % 500 === 0 && score < winningScore) {
        resources.push(new Resource());
    }
    for(let i = 0 ; i < resources.length ; i++) {
        resources[i].draw();
        // Nếu có tài nguyên rơi và con trỏ chuột và chạm với tài nguyên thì thông báo message
        if(resources[i] && mouse.x && mouse.y && collision(resources[i], mouse)) {
            numberOfResources += resources[i].amount;
            floatingMessages.push(new floatingMessage('+' + resources[i].amount, resources[i].x, resources[i].y, 30, 'black'));
            floatingMessages.push(new floatingMessage('+' + resources[i].amount, 470, 85, 30, 'gold'));
            resources.splice(i, 1);
            i--;
        }
    }
}

// utilites: Thể hiện trạng thái của game 
function handleGameStatus() {
    ctx.fillStyle = 'gold';
    ctx.font = '30px Orbitron';
    ctx.fillText('Score: ' + score, 180, 40);
    ctx.fillText('Resource: ' + numberOfResources, 180, 80);
    if(gameOver) {
        ctx.fillStyle = 'black';
        ctx.font = '90px Orbitron';
        ctx.fillText('GAME OVER', 135, 330);
    }
    if(score >= winningScore && enemies.length === 0) {
        ctx.fillStyle == 'black';
        ctx.font = '60px Orbitron';
        ctx.fillText('LEVEL COMPLE', 130, 300);
        ctx.font = '30px Orbitron';
        ctx.fillText('You win with: ' + score + ' points!', 134, 340);
    }
}

// Bắt sự kiện click vào ô được chọn rồi đẩy anh hùng đó vào mảng defender
// Nếu không đủ điều kiện tiền thì thông báo ra màn hình message 
canvas.addEventListener('click', function() {
    const girdPositionX = mouse.x - (mouse.x % cellSize) + cellGap;
    const girdPositionY = mouse.y - (mouse.y % cellSize) + cellGap;

    if(girdPositionY < cellSize) return;
    for(let i = 0 ; i < defenders.length ; i++) {
        if(defenders[i].x === girdPositionX && defenders[i].y === girdPositionY) 
        return;
    }
    let defenderCost = 100;
    if(numberOfResources >= defenderCost) {
        defenders.push(new Defender(girdPositionX, girdPositionY));
        numberOfResources -= defenderCost;
    }else {
        floatingMessages.push(new floatingMessage('need more resources', mouse.x, mouse.y, 20, 'blue'));
    }
});

// Function có nhiệm vụ chạy tất cả các function đã tạo 
function animate() {
    ctx.clearRect(0, 0 , canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0 , controlsBar.width, controlsBar.height);
    handleGameGird();
    handleDefenders();
    handleResources();
    handleProjectiles();
    handleEnemies();
    chooseDefender();
    handleGameStatus();
    handleFloatingMessages();
    frame++;
    // chạy lại callback nếu như chưa gameover
    if(!gameOver) requestAnimationFrame(animate);
}

animate();

// hàm có chức năng tính toán sự va chạm của 2 khối hình chữ nhật
function collision(first, second) {
    if(     !(  first.x > second.x + second.width ||
                first.x + first.width < second.x ||
                first.y > second.y + second.height ||
                first.y + first.height < second.y)
    ) {
        return true;
    }
}

// có chức năng làm cho giao diện game thay đổi khi người dùng thay đổi kích thước trình duyệt
window.addEventListener('risize', function() {
    canvasPosition = canvas.getBoundingClientRect();
})