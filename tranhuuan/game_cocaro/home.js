let boxArray = [];

for(let i = 0; i< 15 ;i++){
    let row = [];
    for(let j =0 ;j < 15 ;j++){
        row.push('');
    }
    boxArray.push(row);
}

console.log(boxArray);

let isPlayer = true;
let tds = document.getElementsByClassName('playerbox');

for(let td in tds){
    tds[td].onclick = function(){
        let letter = isPlayer? "X" : "O";
        tds[td].innerText = letter;
        
        let rowNUm = Math.floor(td/15);
        let colNum = td % 15;
        caculateWinnerUpAndDOwn(rowNUm,colNum,letter);
        caculateWinnerLeftAndRight(rowNUm,colNum,letter);
        caculateWinnerDiagonalRight(rowNUm , colNum ,letter)
        caculateWinnerDiagonalLeft(rowNUm , colNum ,letter)
        // console.log(rowNUm );
        // console.log(colNum);
        isPlayer =! isPlayer ;
    }
}

//tinh toan nguoi thang di theo chieu tren xuong

function caculateWinnerUpAndDOwn(rowNUm , colNum ,letter){
   
    let  stemp = rowNUm;
    let  pointer = 1;
    let  changerCheck = true;
    stemp--;
    while(true){
        if(boxArray[stemp][colNum] == letter){
            pointer++;
        }else{
            if(changerCheck == false){
                stemp = rowNUm;
            }
            changerCheck =! changerCheck;
        }

        if(pointer == 5){
            alert("winner " + letter);
            break;
        }

        changerCheck ? stemp-- : stemp++;
    }
}

//tinh toan chien trai sang phai
function caculateWinnerLeftAndRight(rowNUm , colNum ,letter){
   
    let  stemp = colNum;
    let  pointer = 1;
    let  changerCheck = true;
    stemp--;
    while(true){
        if(boxArray[rowNUm][stemp] == letter){
            pointer++;
        }else{
            if(changerCheck == false){
                stemp = colNUm;
            }
            changerCheck =! changerCheck;
        }

        if(pointer == 5){
            alert("winner " + letter);
            break;
        }

        changerCheck ? stemp-- : stemp++;
    }
}
// tinh toan di tu cheo phai 
function caculateWinnerDiagonalRight(rowNUm , colNum ,letter){
   
    let  stempRow = rowNUm;
    let  stempCol = colNum;
    let  pointer = 1;
    let  changerCheck = true;
    stempRow--;
    stempCol++;
    while(true){
        if(boxArray[stempRow][stempCol] == letter){
            pointer++;
        }else{
            if(changerCheck == false){
                stempRow = rowNUm;
                stempCol = colNum;
            }
            changerCheck =! changerCheck;
        }

        if(pointer == 5){
            alert("winner " + letter);
            break;
        }

        if(changerCheck == true){
            stempRow--;
            stempCol++;
        }else{
            stempRow++;
            stempCol--;
        }
    }
}
//tinh di cheo trai
function caculateWinnerDiagonalLeft(rowNUm , colNum ,letter){
   
    let  stempRow = rowNUm;
    let  stempCol = colNum;
    let  pointer = 1;
    let  changerCheck = true;
    stempRow--;
    stempCol--;
    while(true){
        if(boxArray[stempRow][stempCol] == letter){
            pointer++;
        }else{
            if(changerCheck == false){
                stempRow = rowNUm;
                stempCol = colNum;
            }
            changerCheck =! changerCheck;
        }

        if(pointer == 5){
            alert("winner " + letter);
            break;
        }

        if(changerCheck == true){
            stempRow--;
            stempCol--;
        }else{
            stempRow++;
            stempCol++;
        }
    }
}