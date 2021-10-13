
function run() {
    let day = document.getElementById("day").value;
    let money = Number(document.getElementById("money").value);
    let ct16 = displayRadioValue("ct16");
    dayCheck(day,money,ct16);
}
function dayCheck(_day,_money,_ct16) {
    switch (_day) {
        case "thứ 2":
            alert("Thứ 2 đi học!")
            break;
        case "thứ 3":
            alert("Thứ 3 được nghỉ!")
            break;
        case "thứ 4":
            alert("Thứ 4 được nghỉ!")
            break;
        case "thứ 5":
            alert("Thứ 5 đi học!")
            break;
        case "thứ 6":
            alert("Thứ 6 đi học!")
            break;
        case "thứ 7":
            if (!_ct16) {
                if (_money > 100000) {
                    alert("Thứ 7 không dịch, có tiền: Đi xem phim và số dư -100.000đ");
                    _money -= 100000;
                }
                else alert("Thứ 7 không dịch nhưng không có tiền: Ở nhà!");
            }
            else alert("Thứ 7 có tiền mà lại dịch: Ở nhà!")
            break;
        case "chủ nhật":
            if (_money > 0) {
                alert("Có tiền: Đi ăn!");
            }
            else alert("Không có tiền: Ở nhà!")
            break;
        default:
            alert("Giá trị nhập chưa đúng!")
            break;
        } 
}
function displayRadioValue(elName) {
    var ele = document.getElementsByName(elName);
    let returnValue = false;
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked && ele[i].value == "true")
            returnValue = true;
    }
    return returnValue;
}