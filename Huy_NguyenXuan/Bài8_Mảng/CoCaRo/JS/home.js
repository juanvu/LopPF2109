//lay ra cac the co classname la playbox
let tds = document.getElementsByClassName("playerBox");

let boxArray = [];
for (var i=0; i <20;i++) {
    let row = [];
    for (let j=0;j<20;j++) {
        row.push('');
    }
    //doan nay thi row se co 20 cột
    boxArray.push(row);
}

console.log(boxArray);

let player1 = true;//false neu la nguoi choi player2
//Khai báo sự kiện cho tung TD 1
for (let tdIndex in tds) {

    tds[tdIndex].onclick = function() {
        if (tds[tdIndex] !='X' || tds[tdIndex] != 'O') {
            //Day là phần thân sự kiện mỗi khi người dùng bấm vào ô hình vuông để chơi
            let letter = player1 ? "X" : "O";

            tds[tdIndex].innerHTML = letter; //Thay đổi nội dung hiển thị ra bên ngoài HTML

            //Cập nhật lại giá trị vào trong mảng
            let rowNum = Math.floor(tdIndex/20);
            // console.log(rowNum);
            let colNum = tdIndex % 20;
            boxArray[rowNum][colNum] = letter;
            // console.log(boxArray);

            //Tinh toán người thắng cuộc
            caculateWinner(rowNum, colNum, letter);

            player1 = !player1;//Gắn lại lượt cho player khác
        }
    }
};

//Vị trí bắt đầu là ô TD người dùng vừa bấm
function caculateWinner(rowNum, colNum, letter) {
    //Đi theo chiều lên và xuống
    let point = 1;//Rule là point = 5 thì win

    let tempRowNum = rowNum;
    let upOrDown = true;
    let tempColNum = colNum;
    let leftOrRight = true;
    let cross1 = true;
    let cross2 = true;
    tempColNum--;
    tempRowNum--;
    //Đi theo chiều lên xuống
    while(tempRowNum > -1 && tempRowNum < 20) {
        let curBoxLetter = boxArray[tempRowNum][colNum];
        if (curBoxLetter == letter) {
            point++;
        } else {
            //đây là chiều đi xuống: thoát ra không kiểm tra nữa
            if (upOrDown == false) {
                break;
            }
            //Đảo chiều sang đi xuống
            upOrDown = false;//duyệt đi xuống
            tempRowNum = rowNum;
        }
        if (point == 5) {
            alert("Winner la " + letter);
            break;
        }
        //Nếu chiều đi lên thì chỉ số hàng giảm, chiều đi xuống thì chỉ số hàng tăng
        upOrDown ? tempRowNum-- : tempRowNum++;
    }

    //Đi theo chiều trái rồi sang phải
    while  (tempColNum > -1 && tempColNum < 20) {
        curBoxLetter = boxArray[rowNum][tempColNum];
        if (curBoxLetter == letter) {
            point++;
        } else {
            //Đây là chiều đi trái: thoát ra không kiểm tra nữa
            if(leftOrRight == false) {
                break;
            }
            //Đảo chiều sang trái
            leftOrRight = false; // Duyệt sang phải
            tempColNum = colNum;
        }
        if (point == 5) {
            alert("Winner la " + letter);
            break;
        }
        //Nếu chiều đi sang trái thì chỉ số hàng giảm, chiều sang phải thì chỉ số hàng tăng
        leftOrRight ? tempColNum-- : tempColNum++;
    }

    //Chéo lên trái và chéo xuống phải
    while (tempColNum > -1 && tempColNum < 20 && tempRowNum > -1 && tempRowNum < 20) {
        curBoxLetter = boxArray[tempRowNum][tempColNum];
        if (curBoxLetter == letter) {
            point++;
        } else {
            //Đây là chiều chéo đi xuống: thoát ra không kiểm tra nữa
            if(cross1 == false) {
                break;
            }
            //Đảo chiều sang đi xuống
            cross1 = false;//Duyệt đi xuống
            tempRowNum = rowNum;
            tempColNum = colNum;
        }
        if (point == 5) {
            alert("Winner la " + letter);
            break;
        }
        //Nếu chiều đi lên thì chỉ số hàng + cột giảm, chiều đi xuống thì chỉ số hàng + cột tăng
        if (cross1) {
            tempColNum++;
            tempRowNum++;
        } else {
            tempColNum--;
            tempRowNum--;
        };
    }
    //Chéo xuống trái và chéo lên phải
    while (tempColNum > -1 && tempColNum < 20 && tempRowNum > -1 && tempRowNum < 20) {
        curBoxLetter = boxArray[tempRowNum][tempColNum];
        if (curBoxLetter == letter) {
            point++;
        } else {
            //Đây là chiều đi xuống: thoát ra không kiểm tra nữa
            if (cross2 == false) {
                break;
            }
            //Đảo chiều sang đi xuống
            cross2 = false;
            tempRowNum = rowNum;
            tempColNum = colNum;
        }
        if (point == 5) {
            alert("Winner la " + letter);
            break;
        }
        //Nếu chiều đi lên thì chỉ số hàng giảm, cột tăng, nếu chiều đi xuống thì chỉ số hàng tăng , cột giảm
        if (cross2) {
            tempColNum++;
            tempRowNum--;
        } else {
            tempColNum--;
            tempRowNum++;
        }
    };
}