//Bai 1
// let myColor = ["Red","Green","White","Black"];
// document.write(myColor.join('-'));

//Bai 2
let userInput =prompt("Moi nhap vao 1 chuoi so");
if (userInput) {
    let numbers = [];
    //025468
    for (let i=0; i<userInput.length;i++) {
        numbers.push(userInput.substring(i,i+1));
        // console.log(userInput.substring(i,i+1));
    }
    let finalResult ='';//Dung de luu chuoi moi sau xu ly
    let isEvenNumber = false;//Kiem tra so truoc do la so chan

    for(let num in numbers) {//for in dùng với array sẽ tạo ra thuộc tính mỗi phần tử là giá trị index tức 0,1,2,...
        if (numbers[num] % 2 == 0) {
            if (isEvenNumber) {
                finalResult += "-";
            }
            isEvenNumber = true;
        } else {
            isEvenNumber = false;
        }
        finalResult += numbers[num];
    }
    console.log(finalResult);
}