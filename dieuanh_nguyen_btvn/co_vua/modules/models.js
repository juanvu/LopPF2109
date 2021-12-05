function Game(){}

Game.prototype.init = function(){
    this.currentPlayer = WHITE;
    this.selectedPiece = null;
    this.board = [];
    this.undoHistory = [];
    this.redoHistory = [];
    PLAYER_TYPES.forEach((player)=>{
        for (let i=1;i<=4;i++){
            const pieceType = i==1?ROOK:(i===2?KNIGHT:BISHOP);
            const letter = String.fromCharCode(i + 64).toUpperCase();
            const letter2 = String.fromCharCode((8-i+1) + 64).toUpperCase();
            let piece1, piece2;
            piece1 = new PawnPiece(player,player===BLACK?letter+"7":letter+"2");
            console.log(piece1.type);
            piece2 = new PawnPiece(player,player===BLACK?letter2+"7":letter2+"2");
            if (piece1 !== null){
                game.addPiece(piece1);
            }
            if (piece2 !== null){
                game.addPiece(piece2);
            }
            if (i<=3){
                switch (pieceType) {
                    case ROOK:
                        piece1 = new RookPiece(player,player===BLACK?letter+"8":letter+"1");
                        piece2 = new RookPiece(player,player===BLACK?letter2+"8":letter2+"1");
                        break;
                    case BISHOP:
                        piece1 = new BishopPiece(player,player===BLACK?letter+"8":letter+"1");
                        piece2 = new BishopPiece(player,player===BLACK?letter2+"8":letter2+"1");
                        break;
                    case KNIGHT:
                        piece1 = new KnightPiece(player,player===BLACK?letter+"8":letter+"1");
                        piece2 = new KnightPiece(player,player===BLACK?letter2+"8":letter2+"1");
                        break;
                    default:
                        piece1 = null;
                        piece2 = null;
                        break;
                }
                if (piece1 !== null){
                    game.addPiece(piece1);
                }
                if (piece2 !== null){
                    game.addPiece(piece2);
                }
            }
            else if (i===4){
                piece1 = new KingPiece(player,player===WHITE?letter2+"1":letter2+"8");
                game.addPiece(piece1);
                piece2 = new QueenPiece(player,player===WHITE?letter+"1":letter+"8");
                game.addPiece(piece2);
            }
        }
    });
    this.drawBoardGame(false);
}

Game.prototype.switchPlayer = function(){
    this.currentPlayer = this.currentPlayer === WHITE ? BLACK : WHITE;
    this.selectedPiece = null;
    this.drawBoardGame();
};

Game.prototype.reset = function(){
    this.init();
};

Game.prototype.checkEndGame = function(){
    const whiteKing = this.board.find((item)=>item instanceof KingPiece && item.color===WHITE);
    const blackKing = this.board.find((item)=>item instanceof KingPiece && item.color===BLACK);
    if (!whiteKing){
        alert("Chuc mung quan den da thang");
    }
    else if (!blackKing){
        alert("Chuc mung quan trang da thang");
    }
    return !whiteKing || !blackKing;
}

Game.prototype.drawBoardGame = function (checkEndGame = true){
    if (checkEndGame === false || this.checkEndGame()===false){
        $("#board tbody").empty();
        for (let i = 1;i<=8;i++){
            let $tr = $("<tr id='row"+i+"'></tr>");
            $("#board tbody").prepend($tr);
            let $firstth = $("<td>"+i+"</td>");
            $tr.append($firstth);
            for (let j = 1; j<=8;j++){
                const letter = String.fromCharCode(j + 64).toUpperCase();
                const cellColorClass = i%2 - j%2===0?"black":"white";
                $tr.append($("<td class='board-cell "+cellColorClass+"' id='"+(letter+i.toString())+"'></td>"));
            }
        }
        for (const piece of game.board){
            if (piece instanceof Piece){
                const imgSrc = piece.img;
                const position = piece.position;
                const color = piece.color;
                $("#"+position).toggleClass("player_WHITE",color===WHITE).toggleClass("player_BLACK",color===BLACK).append($("<img/>").attr("src",imgSrc)).toggleClass("selected",!!game.selectedPiece && game.selectedPiece.position === position);
            }
        }
        $("#infos .player-turn").text(game.currentPlayer === BLACK ? "Quan den":"Quan trang");
    }
    else{
        this.reset();
    }
}

Game.prototype.addPiece = function(piece){
    this.board.push(piece);
};

Game.prototype.findPieceByPosition = function(position){
    return this.board.find((item)=>item.position === position);
};

Game.prototype.changePiecePosition = function(currentPosition,newPosition){
    const pieceIndex = this.board.findIndex((item)=>item.position === currentPosition);
    if (pieceIndex>-1){
        const piece = this.board[pieceIndex];
        if (piece.canSwichPosition(newPosition,this)){
            const attackedItem = this.board.find((item)=>item.position === newPosition);
            this.undoHistory.push({board: [...this.board],currentPlayer: this.currentPlayer});
            this.redoHistory = [];
            let newPiece = Object.assign(Object.create(Object.getPrototypeOf(piece)), piece)
            newPiece.move(newPosition);
            this.board[pieceIndex] = newPiece;
            if (attackedItem){
                this.board = this.board.filter((item)=>item!==attackedItem);
                this.selectedPiece = null;
            }
            this.switchPlayer();
            return true;
        }
    }
    return false;
};

Game.prototype.canUndo = function(){
    return this.undoHistory.length>0;
}

Game.prototype.canRedo = function(){
    return this.redoHistory.length>0;
}

Game.prototype.undo = function(){
    if (this.undoHistory.length){
        const historyItem = {...this.undoHistory[this.undoHistory.length-1]};
        this.board = [...historyItem.board];
        this.currentPlayer = historyItem.currentPlayer;
        this.undoHistory = this.undoHistory.splice(this.undoHistory.length-1,1);
        this.redoHistory.push(historyItem);
        this.drawBoardGame();
    }
}

Game.prototype.redo = function(){
    if (this.redoHistory.length){
        const historyItem = {...this.redoHistory[this.redoHistory.length-1]};
        this.board = historyItem.board;
        this.currentPlayer = historyItem.currentPlayer;
        this.redoHistory = this.redoHistory.splice(this.redoHistory.length-1,1);
        this.undoHistory.push(historyItem);
        this.drawBoardGame();
    }
}

Game.prototype.selectPosition = function(position){
    const selectedPiece = this.selectedPiece;
    const piece = this.findPieceByPosition(position);
    console.log(selectedPiece);
    if (!selectedPiece){
        if (piece && piece.color === this.currentPlayer){
            this.selectedPiece = piece;
        }
        else{
            this.selectedPiece = null;
        }
        this.drawBoardGame();
    }
    else{
        if (piece){
            if (piece.color === this.currentPlayer){
                this.selectedPiece = piece;
                this.drawBoardGame();
            }
            else{
                this.changePiecePosition(selectedPiece.position,position);
            }
        }
        else{
            this.changePiecePosition(selectedPiece.position,position);
        }
    }
};


/* Start Piece */
function Piece(type, color, position){
    this.type = type;
    this.color = color;
    this.position = position;
    this.moved = false;
    this.img = "/images/"+type.toLowerCase()+"_"+color.toLowerCase()+".svg";
}

Piece.prototype.move = function(position) {
    this.position = position;
    this.moved = true;
};

Piece.prototype.getLineForNewPosition = function(position) {
    const newPosLetter = this.getPosLetter(position);
    const newPosNum = this.getPosNum(position); 
    const currentPosLetter = this.getPosLetter();
    const currentPosNum = this.getPosNum();
    if (newPosLetter === currentPosLetter){
        return VERTICAL_LINE;
    }
    else if (newPosNum === currentPosNum){
        return HORIZONTAL_LINE;
    }
    else if (Math.abs(currentPosNum-newPosNum) === Math.abs(currentPosLetter-newPosLetter)){
        return DIAGONAL_LINE;
    }
    else if (Math.abs(currentPosNum-newPosNum) + Math.abs(currentPosLetter-newPosLetter) === 3){
        return KNIGHT_LINE;
    }
    return null;
};

Piece.prototype.canSwichPosition = function(position,game) {
    console.log("Can move",this.canMove(position,game));
    console.log("Can attack",this.canAttack(position,game));
    return this.canMove(position,game) || this.canAttack(position,game);
};

Piece.prototype.getPosNum = function(position) {
    position = position || this.position;
    return parseInt(position.charAt(1));
};

Piece.prototype.getPosLetter = function(position) {
    position = position || this.position;
    return parseInt(position.charCodeAt(0));
};

Piece.prototype.canMove = function(position,game,withNewPosition = true) {
    console.log("Check can move piece");
    const newPosLetter = this.getPosLetter(position);
    const newPosNum = this.getPosNum(position); 
    console.log((newPosLetter>="A".charCodeAt(0) && newPosLetter<="H".charCodeAt(0) && newPosNum>=1 && newPosNum<=8));
    if (!(newPosLetter>="A".charCodeAt(0) && newPosLetter<="H".charCodeAt(0) && newPosNum>=1 && newPosNum<=8)){
        return false;
    }
    const line = this.getLineForNewPosition(position);
    console.log(line);
    let posLetterI = this.getPosLetter();
    let posNumI = this.getPosNum();
    switch (line){
        case DIAGONAL_LINE:
            for (let i=1;i<=7;i++){
                posLetterI += newPosLetter>=posLetterI?1:-1;
                posNumI += newPosNum>=posNumI?1:-1; 
                if (posLetterI===newPosLetter || posNumI === newPosNum){
                    break;
                }
                const positionI = String.fromCharCode(posLetterI)+posNumI;
                const piece = game.findPieceByPosition(positionI);
                if (piece){
                    return false;
                }
            }
            break;
        case HORIZONTAL_LINE:
            for (let i=1;i<=7;i++){
                posLetterI += newPosLetter>=posLetterI?1:-1;
                if (posLetterI===newPosLetter){
                    break;
                }
                const positionI = String.fromCharCode(posLetterI)+posNumI;
                const piece = game.findPieceByPosition(positionI);
                console.log(piece);
                if (piece){
                    return false;
                }
            }
            break;
        case VERTICAL_LINE:
            for (let i=1;i<=7;i++){
                posNumI += newPosNum>=posNumI?1:-1; 
                if (posNumI === newPosNum){
                    break;
                }
                const positionI = String.fromCharCode(posLetterI)+posNumI;
                const piece = game.findPieceByPosition(positionI);
                if (piece){
                    return false;
                }
            }
            break;
        default:
            break;
    } 
    if (withNewPosition){
        const piece = game.findPieceByPosition(position);
        if (piece){
            return false;
        }
    }
};

Piece.prototype.canAttack = function(position,game) {
    throw new Error("Abstract method!");
};

/* End piece */
/* Start Piece */
function KingPiece(color, position){
    Piece.call(this,KING,color,position);
}

KingPiece.prototype = Object.create(Piece.prototype);
KingPiece.prototype.constructor = KingPiece;

KingPiece.prototype.canMove = function(position,game,withNewPosition = true){
    const newPosLetter = this.getPosLetter(position);
    const newPosNum = this.getPosNum(position); 
    const currentPosLetter = this.getPosLetter();
    const currentPosNum = this.getPosNum();
    if (Piece.prototype.canMove.call(this,position,game,withNewPosition) === false){
        return false;
    }
    return Math.abs(currentPosNum-newPosNum) + Math.abs(currentPosLetter-newPosLetter) <= 2 && (position!==this.position);
};

KingPiece.prototype.canAttack = function(position,game){
    const newPosLetter = this.getPosLetter(position);
    const newPosNum = this.getPosNum(position); 
    const currentPosLetter = this.getPosLetter();
    const currentPosNum = this.getPosNum();
    const piece = game.findPieceByPosition(position);
    return !!piece && piece.color !== this.color && Math.abs(currentPosNum-newPosNum) + Math.abs(currentPosLetter-newPosLetter) <= 2 && (position!==this.position);
};


/* End Piece */
function QueenPiece(color, position){
    Piece.call(this,QUEEN,color,position);
}

QueenPiece.prototype = Object.create(Piece.prototype);
QueenPiece.prototype.constructor = QueenPiece; 

QueenPiece.prototype.canMove = function(position,game,withNewPosition = true){
    const newPosLetter = this.getPosLetter(position);
    const newPosNum = this.getPosNum(position); 
    const currentPosLetter = this.getPosLetter();
    const currentPosNum = this.getPosNum();
    if (Piece.prototype.canMove.call(this,position,game,withNewPosition) === false){
        return false;
    }
    const line = this.getLineForNewPosition(position);
    return line !== null && line !== KNIGHT_LINE;
};

QueenPiece.prototype.canAttack = function(position,game){
    const newPosLetter = this.getPosLetter(position);
    const newPosNum = this.getPosNum(position); 
    const piece = game.findPieceByPosition(position);
    return !!piece && piece.color !== this.color && this.canMove(position,game,false);
};


function RookPiece(color, position){
    Piece.call(this,ROOK,color,position);
}

RookPiece.prototype = Object.create(Piece.prototype);
RookPiece.prototype.constructor = RookPiece; 
RookPiece.prototype.canMove = function(position,game,withNewPosition = true){
    const newPosLetter = this.getPosLetter(position);
    const newPosNum = this.getPosNum(position); 
    const currentPosLetter = this.getPosLetter();
    const currentPosNum = this.getPosNum();
    if (Piece.prototype.canMove.call(this,position,game,withNewPosition) === false){
        return false;
    }
    const line = this.getLineForNewPosition(position);
    return line === HORIZONTAL_LINE || line === VERTICAL_LINE;
};

RookPiece.prototype.canAttack = function(position,game){
    const newPosLetter = this.getPosLetter(position);
    const newPosNum = this.getPosNum(position); 
    const piece = game.findPieceByPosition(position);
    return !!piece && piece.color !== this.color && this.canMove(position,game,false);
};

function BishopPiece(color, position){
    Piece.call(this,BISHOP,color,position);
}

BishopPiece.prototype = Object.create(Piece.prototype);
BishopPiece.prototype.constructor = BishopPiece; 

BishopPiece.prototype.canMove = function(position,game,withNewPosition = true){
    const newPosLetter = this.getPosLetter(position);
    const newPosNum = this.getPosNum(position); 
    const currentPosLetter = this.getPosLetter();
    const currentPosNum = this.getPosNum();
    if (Piece.prototype.canMove.call(this,position,game,withNewPosition) === false){
        return false;
    }
    const line = this.getLineForNewPosition(position);
    return line === DIAGONAL_LINE;
};

BishopPiece.prototype.canAttack = function(position,game){
    const newPosLetter = this.getPosLetter(position);
    const newPosNum = this.getPosNum(position); 
    const piece = game.findPieceByPosition(position);
    return !!piece && piece.color !== this.color && this.canMove(position,game,false);
};

function KnightPiece(color, position){
    Piece.call(this,KNIGHT,color,position);
}

KnightPiece.prototype = Object.create(Piece.prototype);
KnightPiece.prototype.constructor = KnightPiece; 

KnightPiece.prototype.canMove = function(position,game,withNewPosition = true){
    const newPosLetter = this.getPosLetter(position);
    const newPosNum = this.getPosNum(position); 
    const currentPosLetter = this.getPosLetter();
    const currentPosNum = this.getPosNum();
    if (Piece.prototype.canMove.call(this,position,game,withNewPosition) === false){
        return false;
    }
    const line = this.getLineForNewPosition(position);
    return line === KNIGHT_LINE;
};

KnightPiece.prototype.canAttack = function(position,game){
    const newPosLetter = this.getPosLetter(position);
    const newPosNum = this.getPosNum(position); 
    const piece = game.findPieceByPosition(position);
    return !!piece && piece.color !== this.color && this.canMove(position,game,false);
};

function PawnPiece(color, position){
    Piece.call(this,PAWN,color,position);
}

PawnPiece.prototype = Object.create(Piece.prototype);
PawnPiece.prototype.constructor = PawnPiece;

PawnPiece.prototype.canMove = function(position,game,withNewPosition = true){
    console.log("Check can move");
    const newPosLetter = this.getPosLetter(position);
    const newPosNum = this.getPosNum(position); 
    const currentPosLetter = this.getPosLetter();
    const currentPosNum = this.getPosNum();
    if (Piece.prototype.canMove.call(this,position,game,withNewPosition) === false){
        return false;
    }
    const line = this.getLineForNewPosition(position);
    console.log("LINE",line);
    return line === VERTICAL_LINE && ((this.color === WHITE && newPosNum>currentPosNum && (newPosNum-currentPosNum === 1 || (!this.moved && newPosNum - currentPosNum === 2)) || (this.color === BLACK && newPosNum<currentPosNum && (newPosNum-currentPosNum === -1 || (!this.moved && newPosNum - currentPosNum === -2)))));
};

PawnPiece.prototype.canAttack = function(position,game){
    const newPosLetter = this.getPosLetter(position);
    const newPosNum = this.getPosNum(position); 
    const currentPosLetter = this.getPosLetter();
    const currentPosNum = this.getPosNum();
    const piece = game.findPieceByPosition(position);
    return !!piece && piece.color !== this.color && (((this.color === BLACK && newPosNum-currentPosNum === -1) || (this.color === WHITE && newPosNum-currentPosNum === 1)) && Math.abs(newPosLetter-currentPosLetter) === 1);
};