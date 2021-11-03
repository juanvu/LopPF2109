let value = null;

do {
    value = prompt("Nhập vào số từ 1->10: ");
}while(value < 1 || value > 10);

alert("Số bạn vừa nhập là " + value);