function clickme(){
    let x=document.getElementById('month').value;
    if(isNaN(x)){
        alert("nhập sai kiểu dữ liệu");
    }else{
        switch (x) {
            case "1":
            case "3":
            case "5":
            case "7":
            case "8":
            case "10":
            case "12":    
                document.getElementById('hh').innerHTML='số gày trong tháng là 31 ngày';
                break;
            case "2":
                document.getElementById('hh').innerHTML='số gày trong tháng là 28 hoặc 29 ngày';
                break;
            case "4":
            case "6":
            case "9":
            case "11":
                document.getElementById('hh').innerHTML='số gày trong tháng là 30 ngày';
                break;
            default:
                break;
                }
        }
}