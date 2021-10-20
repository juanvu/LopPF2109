function calculatePoint() {
    let diemToan = Number(document.getElementById("toan").value);
    let diemVan = Number(document.getElementById("van").value);
    let diemAnh = Number(document.getElementById("anh").value);
    let khuVuc = document.getElementById("khuvuc").value;

    if(diemAnh && diemToan && diemVan && khuVuc) {
        let sum = 0;
        sum = sum_1(diemVan, diemToan, diemAnh);
        switch(khuVuc) {
            case "KV1":
                sum+=0.75; break;
            case "KV2":
                sum+=0.25; break;
            case "KV2-NT":
                sum+=0.5; break;
            case "KV3":
                sum = sum; break;
            default:
                alert("Vui lòng điền đủ thông tin!");
        }
        alert("Tổng điểm đại học khối D của bạn là : " + sum);
    }else {
        alert("Vui lòng điền đủ thông tin!");
    }
}

function sum_1(a, b, c) {
    return a+b+c;
} 