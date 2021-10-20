function chekMoney() {
    let fruit = document.getElementById("fruit").value;
    fruit = fruit.toLowerCase();
    if(fruit) {
        switch(fruit) {
            case "ổi":
                alert("Ổi có giá 20000 VND/kg");
                break;
            case "dưa hấu":
                alert("Dưa Hấu có giá 20000 VND/kg");
                break;
            case "táo":
                alert("Táo có giá 30000 VND/kg");
                break;
            case "xoài":
                alert("Xoài có giá 30000  VND/kg");
                break;
            case "cam":
                alert("Cam có giá 40000  VND/kg");
                break;
            case "chôm chôm":
                alert("Chôm Chôm có giá 40000  VND/kg");
                break;
            case "măng cụt":
                alert("Măng Cụt có giá 50000  VND/kg");
                break;
            default:
                alert("Sản phẩm bạn tìm không có trong danh mục");
        }
    }
}