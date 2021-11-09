
//lay ra cac the  co classname la playerbox
let tds = document.getElementsByClassName('playerBox');

let boxArray = [];
for(var i=0;i<20;i++) {
	let row = [];
  for(let j =0;  j<20;j++) {
  		row.push('');
  }
  
  //den doan nay thi row se co 20 cot
  boxArray.push(row);
}

console.log(boxArray);

let player1 = true; // false neu la nguoi choi player2
//khai bao su kien cho tung TD 1
for(let tdIndex in tds) {

	tds[tdIndex].onclick = function(){
  	//day la phan than su kien moi khi nguoi dung bam vao o hinh vuong de choi
  	let letter = player1 ? "X" : "O";
    
    tds[tdIndex].innerText = letter; //thay doi noi dung hien thi ra ben ngoai HTML
    
    ///cap nhat lai gia tri vao trong mang
    let rowNum = Math.floor(tdIndex/20);
    let colNum = tdIndex%20;
    boxArray[rowNum][colNum] = letter;
	//console.log(boxArray);
    
    
	//tinh toan nguoi thang cuoc
	caculateWinner(rowNum, colNum, letter);
	
    player1 = !player1; //gan lai luot choi cho player khac
  };
}



//vị trí bắt đầu là ô TD người dùng vừa bấm
function caculateWinner(rowNum, colNum, letter) {
	///đi theo chiều lên và chiều xuống
	
	let point = 1; //rule là point = 5 thi win
	
	let tempRowNum = rowNum;
	let upOrDown = true;
	let tempColNum = colNum;
	let leftOrRight = true;
    let cross1 = true;
    let cross2 = true;
    tempColNum--;
	tempRowNum--;
	while(tempRowNum > -1 && tempRowNum < 20) {
		
		let curBoxLetter = boxArray[tempRowNum][colNum];
		if(curBoxLetter == letter) {
			point++;
		}else {
			//day la chieu di xuong: thoat ra ko kiem tra nua
			if(upOrDown == false) {
				break;
			}
			
			//dao chieu sang di xuong
			upOrDown = false; // duyet di xuong
			tempRowNum = rowNum;
		}
		
		if(point == 5) {
			alert('Winner la ' + letter);
			break;
		}
		
		//neu chieu di len thi chi so hang giam, chieu di xuong thi chi so hang tang
		upOrDown ? tempRowNum-- : tempRowNum++;
	}
	
	
	
	//đi theo chiều trái rồi sang phải
	
	
	
	while(tempColNum > -1 && tempColNum < 20) {
		
		curBoxLetter = boxArray[rowNum][tempColNum];
		if(curBoxLetter == letter) {
			point++;
		}else {
			//day la chieu di xuong: thoat ra ko kiem tra nua
			if(leftOrRight == false) {
				break;
			}
			
			//dao chieu sang di xuong
			leftOrRight = false; // duyet di xuong
			tempColNum = colNum;
		}
		
		if(point == 5) {
			alert('Winner la ' + letter);
			break;
		}
		
		//neu chieu di len thi chi so hang giam, chieu di xuong thi chi so hang tang
		leftOrRight ? tempColNum-- : tempColNum++;
	}
	
	
	
	//cheo lên trái và chéo xuống phải
	while(tempColNum > -1 && tempColNum < 20 && tempRowNum > -1 && tempRowNum < 20) {
		
		curBoxLetter = boxArray[tempRowNum][tempColNum];
		if(curBoxLetter == letter) {
			point++;
		} else {
			//day la chieu di xuong: thoat ra ko kiem tra nua
			if(cross1 == false) {
				break;
			}
			
			//dao chieu sang di xuong
			cross1 = false; // duyet di xuong
            tempRowNum = rowNum;
			tempColNum = colNum;
		}
		
		if(point == 5) {
			alert('Winner la ' + letter);
			break;
		}
		
		//neu chieu di len thi chi so hang giam, chieu di xuong thi chi so hang tang
        if (cross1) {
            tempColNum++;
            tempRowNum++;
        } else {
            tempColNum--;
            tempRowNum--;
        };
	}

	//chéo xuống trái và chéo lên phải
    while(tempColNum > -1 && tempColNum < 20 && tempRowNum > -1 && tempRowNum < 20) {
		
		curBoxLetter = boxArray[tempRowNum][tempColNum];
		if(curBoxLetter == letter) {
			point++;
		} else {
			//day la chieu di xuong: thoat ra ko kiem tra nua
			if(cross2 == false) {
				break;
			}
			
			//dao chieu sang di xuong
			cross2 = false; // duyet di xuong
            tempRowNum = rowNum;
			tempColNum = colNum;
		}
		
		if(point == 5) {
			alert('Winner la ' + letter);
			break;
		}
		
		//neu chieu di len thi chi so hang giam, chieu di xuong thi chi so hang tang
        if (cross2) {
            tempColNum++;
            tempRowNum--;
        } else {
            tempColNum--;
            tempRowNum++;
        };
	}
}
