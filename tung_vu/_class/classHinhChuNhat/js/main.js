let dai = parseFloat(prompt("Chiều dài:"));
let rong = parseFloat(prompt("Chiều rộng:"));

class Rectangle {
    constructor(chieuDai,chieuRong) {
        this.chieuDai = chieuDai;
        this.chieuRong = chieuRong;
    }
    tinhDienTich () {
        return this.chieuDai * this.chieuRong;
    }
    tinhChuVi () {
        return (this.chieuDai + this.chieuRong) * 2;
    }
    createRectangle(){
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillRect(100, 100, this.chieuDai, this.chieuRong);
   }
}

let rectangle = new Rectangle(dai,rong);
document.write("Diện tích là: " + rectangle.tinhDienTich() + "<br/>");
document.write("Chu vi là: " + rectangle.tinhChuVi() + "<br/>");
rectangle.createRectangle();

