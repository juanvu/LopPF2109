const BLACK = "BLACK";
const WHITE = "WHITE";
const KING = "KING";
const QUEEN = "QUEEN";
const ROOK = "ROOK";
const BISHOP = "BISHOP";
const KNIGHT = "KNIGHT";
const PAWN = "PAWN";
let board = {};
let players = {};
let currentPlayer = WHITE;
let selectedPiece;
const PLAYER_TYPES = [BLACK, WHITE];
const PIECE_TYPES = [KING,QUEEN,ROOK,BISHOP,KNIGHT,PAWN];
const PIECE_IMGS = {};
initBoardGame();
function initBoardGame(){
    board = {};
    $("#board tbody").empty();
    for (let i = 1;i<=8;i++){
        let $tr = $("<tr id='row"+i+"'></tr>");
        $("#board tbody").prepend($tr);
        let $firstth = $("<td>"+i+"</td>");
        $tr.append($firstth);
        for (let j = 1; j<=8;j++){
            const letter = String.fromCharCode(j + 64).toUpperCase();
            board[letter+i] = 0;
            const cellColorClass = i%2 - j%2===0?"black":"white";
            $tr.append($("<td class='board-cell "+cellColorClass+"' id='"+(letter+i.toString())+"'></td>"));
        }
    }
    PLAYER_TYPES.forEach((player)=>{
        players[player] = {};
        PIECE_IMGS[player] = {};
        PIECE_TYPES.forEach((type)=>{
            PIECE_IMGS[player][type] = "/images/"+type.toLowerCase()+"_"+player.toLowerCase()+".svg";
            players[player][type] = [];
        });
        for (let i=1;i<=4;i++){
            const piece = i==1?ROOK:(i===2?KNIGHT:BISHOP);
            const letter = String.fromCharCode(i + 64).toUpperCase();
            const letter2 = String.fromCharCode((8-i+1) + 64).toUpperCase();
            players[player][PAWN].push(...[player===BLACK?letter+"7":letter+"2",player===BLACK?letter2+"7":letter2+"2"]);
            if (i<=3){
                players[player][piece] = [player===BLACK?letter+"8":letter+"1",player===BLACK?letter2+"8":letter2+"1"];
            }
            else if (i===4){
                players[player][KING] = [player===WHITE?letter2+"1":letter2+"8"];
                players[player][QUEEN] = [player===WHITE?letter+"1":letter+"8"];
            }
        }
    });
    currentPlayer = WHITE;
    showBoardGame();
    $("body").on("click",".board-cell",function(e){

    });
}

function switchPlayer(){
    currentPlayer = currentPlayer === BLACK?WHITE:BLACK;
}

function showBoardGame(){
    for (const [player,pieces] of Object.entries(players)){
        for (const [piece, positions] of Object.entries(pieces)){
            for(let position of positions){
                const imgSrc = PIECE_IMGS[player][piece];
                $("#"+position).toggleClass("player_WHITE",player===WHITE).toggleClass("player_BLACK",player===BLACK).append($("<img/>").attr("src",imgSrc));
            }
        }
    }
}

$(document).ready(function(){
    initBoardGame();
});