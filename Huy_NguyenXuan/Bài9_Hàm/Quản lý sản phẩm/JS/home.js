//Khai báo mảng lưu chuỗi
let products = [];

//Add mockup datas
products.push("Nokia ex");

//Hàm thêm sản phẩm
let addProduct = function() {
    let txtProductName = document.getElementById('txtProductName').value;
    products.push(txtProductName);
    displayProducts();
}

//Hàm sửa sản phẩm
let editProduct = function() {
    //Lấy ra được phần tử khi bấm nút editProduct
    
    //Tìm kiếm product trong mảng, rồi cập nhật lại chính nó trong mảng
    
    //render, vẽ lại cái table
    
}

//Hàm xóa sản phẩm
let deleteProduct = function() {
    
}

//Hàm hiển thị sản phẩm
let displayProducts = function() {

    // for(var i=0; i < products.length;i++) {
    //     document.getElementById('btnTbody').innerHTML += products[i];
    // }

    //tim duoc the tbody cua table tren html
    let tbody = document.getElementById('tbodyProducts');
    let finalTbodyHtml ='';
    //Duyet danh sach san pham, su dung for
    let elFormat = "<tr><td>${productName}</td><td><input type='button' products-mane' id='btnEdit' value='Edit'><input type='button' id='btnEdit' value='Edit'>&nbsp;&nbsp;&nbsp;<input type='button' id='btnDelete' value='Delete'></td></tr>";
    for (var i=0;i< products.length;i++) {
        finalTbodyHtml += elFormat.replace('${productName}',products[i]).replace('${products[i]}',i);
        
        //chain
    }

    //Trong khi duyệt thì append các Row sản phẩm vào
    tbody.innerHTML = finalTbodyHtml;
}
displayProducts();