let boxarray = [];
let size = 8;
//lưu mảng
for (let y = 0; y < size; y++) {
    let row = [];
    for (let x = 1; x < size; x++) {
        row.push("");
    }
    boxarray.push(row);
}
console.log(boxarray);
// tạo bàn cờ
let tds = document.getElementsByClassName('square');

for (let td in tds) {
    let rowNum = Math.floor(td / 8);
    let colNum = td % 8;
    if (rowNum % 2 == 0) {
        if (colNum % 2 == 0) {
            tds[td].style.background = 'gray';
        }
    } else {

        if (colNum % 2 != 0 ) {
            tds[td].style.background = 'gray';
            
        }

    }
}


//tạo quân cờ vào bàn cờ
for (let td in tds) {
    
    let rowNum = Math.floor(td / 8);
    let colNum = td % 8;

    //quân cờ đen
    // quân xe
    if ((rowNum == 0 && colNum == 0) || (rowNum == 0 && colNum == 7)) {
        let Rook = '<img src="img/blackRook.png" onclick="clickRook()">';
        tds[td].innerHTML = '<td >' + Rook + '</td>';
    }
    //quân mã
    if ((rowNum == 0 && colNum == 1) || (rowNum == 0 && colNum == 6)) {
        let night = '<img src="img/blackKnight.png" onclick="clickNight()">';
        tds[td].innerHTML = '<td>' + night + '</td>';
    }
    //quân hậu
    if ((rowNum == 0 && colNum == 2) || (rowNum == 0 && colNum == 5)) {
        let bishop = '<img src="img/blackBishop.png" onclick="clickBishop()">';
        tds[td].innerHTML = '<td>' + bishop + '</td>';
    }

    if ((rowNum == 0 && colNum == 3)) {
        let king = '<img src="img/blackKing.png" onclick="clickKing()">';
        tds[td].innerHTML = '<td>' + king + '</td>';
    }
    if ((rowNum == 0 && colNum == 4)) {
        let queen = '<img src="img/blackQueen.png" onclick="clickQueen()">';
        tds[td].innerHTML = '<td>' + queen + '</td>';
    }
    //quan tot
    if (rowNum == 1) {
        let pawn = '<img src="img/blackPawn.png" onclick="clickPawn()">';
        tds[td].innerHTML = '<td>' + pawn + '</td>';
    }

    // quan trang
    // quan xe
    if ((rowNum == 7 && colNum == 0) || (rowNum == 7 && colNum == 7)) {
        let RookWhite = '<img src="img/whiteRook.png" onclick="clickRookWhite()">';
        tds[td].innerHTML = '<td >' + RookWhite + '</td>';
    }
    // quan ma
    if ((rowNum == 7 && colNum == 1) || (rowNum == 7 && colNum == 6)) {
        let nightWhite = '<img src="img/whiteKnight.png" onclick="clickNightWhite()">';
        tds[td].innerHTML = '<td>' + nightWhite + '</td>';
    }
    // quan hau
    if ((rowNum == 7 && colNum == 2) || (rowNum == 7 && colNum == 5)) {
        let bishopWhite = '<img src="img/whiteBishop.png" onclick="clickBishopWhite()">';
        tds[td].innerHTML = '<td>' + bishopWhite + '</td>';
    }
    // quan vua
    if ((rowNum == 7 && colNum == 3)) {
        let kingWhite = '<img src="img/whiteKing.png" onclick="clickKingWhite()">';
        tds[td].innerHTML = '<td>' + kingWhite + '</td>';
    }
    // quan tuong
    if ((rowNum == 7 && colNum == 4)) {
        let queenWhite = '<img src="img/whiteQueen.png" onclick="clickQueenWhite()">';
        tds[td].innerHTML = '<td>' + queen + '</td>';
    }
    // quân tốt
    if(rowNum == 6){
        let pwan = '<img src="img/whitePawn.png" onclick="clickPawnWhite()">' ;
        tds[td].innerHTML = '<td>' + pwan + '</td>';
    }
}
//hàm của quân cờ
function clickRook(rowNum,colNum){
    let stempRow = rowNum;
    let  stempCol = colNum;

    // quân xe
    for(let td in tds){
        tds[td].onclick = function(){
            
        }
    }
}
// tính toán người chơi
// let  isplayer = true;
// if( isplayer){

// }else{

// }