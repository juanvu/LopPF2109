
function run() {
    let day = document.getElementById("day").value;
    let money = Number(document.getElementById("money").value);
    let ct16 = displayRadioValue("ct16");
    dayCheck(day,money,ct16);
}
function dayCheck(_day,_money,_ct16) {
    switch (_day) {
        case "thứ 2":
            alert(`${_day} đi học!`)
            break;
        case "thứ 3":
            alert(`${_day} được nghỉ!`)
            break;
        case "thứ 4":
            alert(`${_day} được nghỉ!`)
            break;
        case "thứ 5":
            alert(`${_day} đi học!`)
            break;
        case "thứ 6":
            alert(`${_day} đi học!`)
            break;
        case "thứ 7":
            alert(!_ct16 ?
                _money > 100000 ?  
                    `${_day} không dịch, có tiền: Đi xem phim và số dư -100.000đ` 
                    : `${_day} không dịch nhưng không có tiền: Ở nhà!` 
                : `Dịch: Ở nhà!`)
            break;
        case "chủ nhật":
            alert(_money > 0 ? `Có tiền: Đi ăn!` : `Không có tiền: Ở nhà!`)
            break;
        default:
            alert(`Giá trị nhập chưa đúng!`)
            break;
        } 
}

function displayRadioValue(ct16) {
    var ele = document.getElementsByName(ct16);
    let returnValue = false;
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked && ele[i].value == "true")
            returnValue = true;
    }
    return returnValue;
}