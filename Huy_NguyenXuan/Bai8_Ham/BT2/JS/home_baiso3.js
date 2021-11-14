let userInput =prompt("Moi nhap vao CHUOI");
if (userInput) {
    let numbers = [];
    //025468
    for (let i=0; i<userInput.length;i++) {
        numbers.push(userInput.substring(i,i+1));
        // console.log(userInput.substring(i,i+1));
    }
    let finalResult ='';
    for (let num in numbers) {
        if (numbers[num] != numbers[num].toUpperCase()) {
            finalResult += numbers[num].toUpperCase();
        } else {
            finalResult += numbers[num].toLowerCase();
        }
    }
    console.log(finalResult);
}