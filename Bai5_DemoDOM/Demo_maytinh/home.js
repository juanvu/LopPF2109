let numerInput = function(num) {
	//Mỗi lần nhập số thì thêm dữ liệu vào màn hình của máy tính
	let showResultInput = document.getElementById('calShowResult');
	let showResultInputVal = showResultInput.value;
	let newVal = showResultInputVal + num;
	showResultInput.value = newVal;
}

let operaInput = function(opera) {
	//Mỗi lần nhập số thì thêm dữ liệu vào màn hình của máy tính
	let showResultInput = document.getElementById('calShowResult');
	let showResultInputVal = showResultInput.value;
	let newVal = showResultInputVal + opera;
	showResultInput.value = newVal;
}

//day al ham khi an vao dau bang, tra ra ket qua
let showResult = function(){
	let showResultInput = document.getElementById('calShowResult');
	let showResultInputVal = showResultInput.value;
	//alert("noi dung thong bao");
	//let alertCmd = 'alert("' + showResultInputVal + '")';
	let alertCmd = `alert(${showResultInputVal});`;
	eval(alertCmd);
}