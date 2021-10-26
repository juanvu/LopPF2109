let display = function() {
    let chuyenCan = document.getElementById("chuyenCan").value;
    let tongKet = Number(document.getElementById("tongKet").value);
    let result = 0;
    if (chuyenCan > 10 || chuyenCan < 1 || tongKet > 10 || tongKet < 0) {
        alert("Nhập lại điểm cho hợp lệ!");
        location.reload();
    } else if (chuyenCan > 8) {
        tongKet += 0.5;
    } else if (chuyenCan > 5) {
        tongKet += 0.25;
    } else if (chuyenCan > 3) {
        tongKet += 0.1;
    }
    if (tongKet > 9) {
        result = "A";
    } else if (tongKet >= 7) {
        result = "B+";
    } else if (tongKet >= 6) {
        result = "B";
    } else if (tongKet >= 4) {
        result = "C";
    } else if (tongKet >= 0) {
        result = "D";
    }
    document.getElementById("display").innerHTML = "Đạt hạng " + result;
}