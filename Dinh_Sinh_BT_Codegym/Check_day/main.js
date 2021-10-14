let day = null;

function KeyDown () {
    document.getElementById("day").type = "text";
}

function CalculateDay() {
    day = document.getElementById("day").value;
    if(day.toUpperCase() == "CHỦ NHẬT") {
        day = 8;
    }else {
        day = parseInt(day);
    }

    let money = parseInt(document.getElementById("money").value);
    let CT16 = document.getElementById("CT16").checked;
    if(isNaN(day)) {
        alert("Vui lòng nhập lại!")
    }else {
        switch(day) {
            case 2:
            case 5:
            case 6:
                document.write("Hôm nay bạn phải đi học rồi !!!");
                break;
            case 3:
            case 4:
                document.write("Hôm nay bạn được nghỉ!!!");
                break;
            case 7:
                if(!CT16) {
                    if(money >= 100000) {
                        document.write("Bạn nên đi xem phim đó !!!");
                    }
                }else {
                    document.write("Tiếc quá có vẻ ngày hôm nay không thích hợp để ra ngoài rồi !!!")
                }
                break;
            case 8:
                if(!CT16) {
                    if(money > 0) {
                        document.write("Chúng ta cùng ra ngoài đi chơi nào");
                    }
                }else {
                    document.write("Trời lạnh vầy ngủ là thích nhất rồi");
                }
                break;
            default:
                alert("Vui lòng nhập từ thứ 2 -> Chủ nhật");
        }
    }
}