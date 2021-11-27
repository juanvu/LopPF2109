let valueInput1 = prompt("Mời bạn nhập vào tên ngôi sao :");
let star = ['Polaris','Aldebaran','Deneb','Vega','Altair','Dubhe','Regulus'];
let constell = ['Ursa Minor','Tarurus','Cygnus','Lyra','Aquila','Ursa Major','Leo'];

//Cách 1: sử dụng biến trong Hàm
function calculate(value1,value2) {
    let temp = -1;
    for(var i =0; i < value1.length; i++) {
        if (valueInput1.toUpperCase() == value1[i].toUpperCase() ) {
            temp = i;
            if (temp >= 0) {
                alert("Ngôi sao " + value1[temp] + " tương ứng chòm sao " + value2[temp]);
                break;
            }
        }
    }
    if(temp == -1) {
        alert("Không tìm thấy kết quả");
    }
};
calculate(star,constell);

//Cách 2: không sử dụng biến phụ
// function calculate() {
//     let temp = -1;
//     for(var i =0; i < star.length; i++) {
//         if (valueInput1.toUpperCase() == star[i].toUpperCase() ) {
//             temp = i;
//             if (temp >= 0) {
//                 alert("Ngôi sao " + star[temp] + " tương ứng chòm sao " + constell[temp]);
//                 break;
//             }
//         }
//     }
//     if (temp == -1) {
//         alert("Không tìm thấy kết quả");
//     }
// };
// calculate();