let innerTextBox = 0;
function openBrack() {
    
    let openBrack = document.getElementById('openBrack').value;
        let innerTextBox = document.getElementById('innerTextBox').value;
    innerTextBox.innerHTML = innetTextBox + openBrack;
}
function offBrack() {
    let offBrack = document.getElementById('offBrack').value;
    let innerTextBox = document.getElementById('innerTextBox').value;
    innerTextBox.innerHTML = innerTextBox + offBrack;
}

function numberClick(val) {
	//co the kiem tra xem dung la so khong
	document.getElementById('innerTextBox').value += val;
}
function showResult(){
	const result = eval(document.getElementById('innerTextBox').value);
	
	document.getElementById('innerTextBox').value += ("=" + result);
}

function operatorClikc(opr){
	//kiem tra xem dung la nhung toan tu hop le ko
	document.getElementById('innerTextBox').value += opr;
}