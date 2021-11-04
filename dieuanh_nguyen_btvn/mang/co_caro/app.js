let sizeX, sizeY, board,playersHistory,player1Turn;
const PLAYER_1 = "X";
const PLAYER_2 = "O";
window.onload = function(e){
    initGameBoard();
}

function initGameBoard(){
    do {
        //sizeX = prompt("Nhap chieu rong cua ban co");
        sizeX = 20;
        sizeX = parseInt(sizeX);
    }
    while (isNaN(sizeX) || sizeX <= 0);
    do {
        //sizeY = prompt("Nhap chieu cao cua ban co");
        sizeY = 20;
        sizeY = parseInt(sizeY);
    }
    while (isNaN(sizeY) || sizeY <= 0 );
    board = [];
    // Theo hang
    for (let i = 0; i<sizeY; i ++){
        board[i] = [];
        // Theo cot
        for (let j = 0; j<sizeX; j++){
            board[i][j] = ".";
        }
    }
    playersHistory = {
        [PLAYER_1]: [],
        [PLAYER_2]: []
    };
    player1Turn = true;
    showGame();
}

function showGame(){
    const gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = "";
    for (let i = 0; i<sizeY; i ++){
        const row = document.createElement("tr");
        for (let j = 0; j<sizeX; j++){
            const cell = document.createElement("td");
            if (board[i][j] === "."){
                cell.addEventListener("click",(e)=>clickCell(e,i,j))
            }
            cell.textContent = board[i][j];
            row.appendChild(cell);
        }
        gameBoard.appendChild(row);
    }
}

function clickCell(e,i,j){
    if (board[i][j] === "."){
       if (player1Turn){
           playersHistory[PLAYER_1].push([i,j]); 
           board[i][j] = "X";
       }
       else{
            playersHistory[PLAYER_2].push([i,j]); 
            board[i][j] = "O";
       }
       showGame();
       const endGame = checkEndGame();
        if (endGame){
            setTimeout(function(){
                alert("Van dau ket thuc");
                initGameBoard();
            },500);
            return;
        }
        player1Turn = !player1Turn;
    }
    else{
        alert("Ban khong the choi vao o nay !");
    }
}

function checkEndGame(){
    let endGame = checkWinner();
    if (endGame){
        alert(player1Turn?`Player 1 (${PLAYER_1}) da thang`:`Player 2 (${PLAYER_2}) da thang`);
    }
    else{
        for (let i = 0; i<sizeY; i ++){
            for (let j = 0; j<sizeX; j++){
                if (board[i][j] === "."){
                    return false;
                }
            }
        }
        alert("Ban co khong con cho trong");
    }
    return true;
}

function checkWinner(){
    const player = player1Turn?PLAYER_1:PLAYER_2;
    const turns = playersHistory[player];
    if (turns.length>=4){
        const lastTurn = turns[turns.length-1];
        const row = lastTurn[0];
        const column = lastTurn[1];
        return checkRow(row,column) || checkColumn(row,column) || checkDiagonal1(row,column) || checkDiagonal2(row,column);
    }   
    return false;
}

function checkStrWinner(str,player){
    return str.match(new RegExp(`(^|\\.)${player}{4}\\.`,"gi")) || str.match(new RegExp(`\\.${player}{4}($|\\.)`,"gi")) || str.match(new RegExp(`\\.${player}{5}`,"gi")) || str.match(new RegExp(`${player}{5}\\.`,"gi"));
}

function checkRow(row,column){
    const player = board[row][column];
    let str = "";
    for (let i = Math.max(column - 5,0);i<Math.min(column+5,sizeX);i++){
        str += board[row][i];
    }
    //console.log("Row: "+str);
    return checkStrWinner(str,player);
}

function checkColumn(row,column){
    const player = board[row][column];
    let str = "";
    for (let i = Math.max(row - 5,0);i<=Math.min(row+5,sizeY-1);i++){
        str += board[i][column];
    }
    //console.log("Column: "+str);
    return checkStrWinner(str,player);
}

function checkDiagonal1(row,column){
    const player = board[row][column];
    let i = row;
    let j = column;
    let str = "";
    for (let k = -5; k<= 5; k++){
        i = row+k;
        j = column+k;
        if (i>=0 && i<sizeX && j>=0 && j<sizeY){
            str += board[i][j];
        }
    }
    //console.log("Diagonal1: "+str);
    return checkStrWinner(str,player);
}

function checkDiagonal2(row,column){
    const player = board[row][column];
    let i = row;
    let j = column;
    let str = "";
    for (let k = -5; k<= 5; k++){
        i = row-k;
        j = column+k;
        if (i>=0 && i<sizeX && j>=0 && j<sizeY){
            str += board[i][j];
        }
    }
    //console.log("Diagonal2: "+str);
    return checkStrWinner(str,player);
}

