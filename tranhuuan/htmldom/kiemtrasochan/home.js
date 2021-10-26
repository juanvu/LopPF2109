function clickme(){
    let x=document.getElementById("inputNumber").value;
    if(isNaN(x)){
        alert("bạn nhập sai kiểu dữ liệu");
    } else{
        if(x%2==0){
            document.getElementById('hh').innerHTML=x+'là số chẵn';
        }else{
            document.getElementById('hh').innerHTML=x+'không là số chẵn';
        }
    }
}