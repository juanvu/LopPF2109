let x=prompt("nhập vào cân nặng của bạn");
let y=prompt("nhập vào chiều cao của bạn");
if(isNaN(x)&&isNaN(y)){
    alert("sai kiểu dữ liệu nhập lại!!");
}else{
    let bmi=parseInt(x)/parseInt(y);
    if(bmi<16){
        alert("gầy cấp độ III");
    }else if(bmi>=16&&bmi>17){
        alert("Gầy độ II");
    }else if(bmi>=17&&bmi>18.5){
        alert("Gầy độ I");
    }else if(bmi>=18.5&&bmi>25){
        alert("bình thường");
    }else if(bmi>=25&&bmi>30){
        alert("thùa cân");
    }else if(bmi>=30&&bmi>35){
        alert("Gầy độ I");
    }else if(bmi>=35&&bmi>40){
        alert("béo phì II");
    }else{
        alert('béo phì cấp độ III')
    }
}