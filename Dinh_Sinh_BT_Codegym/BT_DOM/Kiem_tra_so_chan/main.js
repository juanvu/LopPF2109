function checkNumber() {
    let number = document.getElementById("number").value;
    if(number % 2 == 1) {
        alert(number + " là một số lẻ");
    }else {
        alert(number +" là một số chẵn");
    }
}