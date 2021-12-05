let game = new Game();
function initBoardGame(){
    game.init();
    $("body").off("mouseover",".board-cell").on("mouseover",".board-cell",function(e){
        const currentPosition = $(this).attr("id");
        if (currentPosition && game.currentPlayer){
            const piece = game.board.find((item)=>item.position === currentPosition && item.color === game.currentPlayer);
            $(this).toggleClass("canSelect",piece!==null);
        }
    }).off("mouseleave",".board-cell").on("mouseleave",".board-cell",function(e){
        $(this).removeClass("canSelect");
    }).off("click",".board-cell").on("click",".board-cell",function(e){
        const currentPosition = $(this).attr("id");
        game.selectPosition(currentPosition);
    }).off("click","#undo-btn").on("click","#undo-btn",function(e){
        if (game.canUndo()){
            game.undo();
        }
        else{
            alert("Khong the thuc hien hanh dong nay !");
        }
    }).off("click","#redo-btn").on("click","#redo-btn",function(e){
        if (game.canRedo()){
            game.redo();
        }
        else{
            alert("Khong the thuc hien hanh dong nay !");
        }
    }).off("click","#reset-btn").on("click","#reset-btn",function(e){
        game.reset();
    });
}

$(document).ready(function(){
    initBoardGame();
});