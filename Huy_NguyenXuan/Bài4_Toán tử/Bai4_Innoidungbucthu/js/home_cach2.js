let his_name = prompt("Mời nhập vào tên người nhận");
let address = prompt("Mời nhập vào địa điểm");
let date_time = prompt("Mời nhập vào:ngày DD tháng MM năm YYYY");

let head1 = ('“' + his_name + ' thương nhớ,');

let body1 = ('Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh đến khi trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát khao và cần đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành người phụ nữ như anh mong muốn.');

let body2 = ('Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi đêm xuống? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế. Nhưng hơn tất cả, em chỉ mong một ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ của các con anh (ít nhất là 2 nhé, em vừa mới quyết định đấy!). Em nhớ thật nhiều cảm giác mỗi đêm anh ôm em và ru em ngủ trong vòng tay. Đêm nay, em chỉ muốn được gần bên anh… và anh biết không, trái tim em đang đau đớn đến nhường nào.');

let body3 = ('Anh yêu thương, đừng bao giờ rời xa em nữa nhé. Yêu anh rất nhiều.');

let end1 = (address + ', ' + date_time);

function letter() {
    document.write(head1 + '<br>''<br>' + body1 + '<br>''<br>' + body2 + '<br>''<br>' + body3 + '<br>''<br>' + end1);
}