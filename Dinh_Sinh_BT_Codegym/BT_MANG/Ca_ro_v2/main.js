let showGame = document.getElementById("carogame");

let board = [];
let data = "";
for (let i = 0; i < 5; i++) {
    board[i] = ['?', '?', '?', '?', '?'];
}

for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
showGame.innerHTML = data;

function player1() {
    let positionX = prompt("Nhập vào tọa độ của Y: ");
    let positionY = prompt("Nhập vào tọa độ của X: ");
    data = "";
    board[positionX-1][positionY-1] = "X";
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    if(checkWin("X")) {
        alert("Xin chúc mừng player 1 đã win !!!");
        resetGame();
    }
    showGame.innerHTML = "<hr/>" + data;
    document.getElementById("player1").style.display = 'none';
    document.getElementById("player2").style.display = 'initial';
}

function player2() {
    let positionX = prompt("Nhập vào tọa độ của Y: ");
    let positionY = prompt("Nhập vào tọa độ của X: ");
    data = "";
    board[positionX-1][positionY-1] = "O";
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    if(checkWin("O")) {
        alert("Xin chúc mừng player 2 đã win !!!");
        resetGame();
    }
    showGame.innerHTML = "<hr/>" + data;
    document.getElementById("player2").style.display = 'none';
    document.getElementById("player1").style.display = 'initial';
}

function checkWin (key) {
    let check = false;
    for(let i =  0 ; i < 5 ; i ++) {
        for(let j = 0 ; j < 5 ; j++) {
            if(j <= 4-4) {
                if(board[i][j] != board[i][j+1] && board[i][j+3] != board[i][j+4]) {
                    check = false;
                }else {
                    if(j < 3) {
                        if(board[i][j] == key && board[i][j+1] == key && board[i][j+2] == key) {
                            check = true;
                            break;
                        }
                    }
                }
            }
            if(i <= 4-4) {
                if(board[i][j] != board[i+1][j] && board[i+3][j] != board[i+4][j]) {
                    check = false;
                }else {
                    if(i < 3) {
                        if(board[i][j] == key && board[i+1][j] == key && board[i+2][j] == key) {
                            check = true;
                            break;
                        }
                    }
                }
            }
            
            if(i < 4 && j < 4 && i > 1 && j > 1) {
                if(board[i][j] == key && board[i-1][j+1] == key && board[i+1][j-1] == key) {
                    check = true;
                    break;
                }
            }
            if(i < 4 && j < 4 && i > 1 && j > 1) {
                if(board[i][j] == key && board[i-1][j-1] == key && board[i+1][j+1] == key) {
                    check = true;
                    break;
                }
            }
            if(i < 3 && j < 3) {
                if(board[i][j] == key && board[i+1][j+1] == key && board[i+2][j+2] == key) {
                    check = true;
                    break;
                }
            }
        }
    }
    return check;
}

function resetGame() {
    alert("Quá trình tạo mới trò chơi đang diễn ra !!!");
    location.reload();
}
