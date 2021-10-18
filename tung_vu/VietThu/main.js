function nhap() {
    let name = prompt("Tên người nhận: ");
    let addr = prompt("Địa điểm: ");
    let time = prompt("Thời gian: ");
    document.getElementById("name").innerText = "Tên người nhận: " + name;
    document.getElementById("addr").innerText = "Địa điểm: " + addr;
    document.getElementById("time").innerText = "Thời gian: " + time;
}