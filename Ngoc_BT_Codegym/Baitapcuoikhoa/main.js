let items = [
	{
		LuaChon: "<input type='checkbox'/>",
		MaHang: "D001",
		TenHang: "Dầu gội đầu",
		SoLuong: "2",
		GiaMua: "30000",
		NgayNhap: "2021/12/06",
		NhanHang: "Dove",
	},
];

//khai báo hàm genItemTable: mục đích để vẽ ra các thẻ HTML để hiển thị bên trong thẻ tbody có ID=itemTbody
let genItemTable = function () {
	//đoạn lệnh này xóa toàn bộ các thẻ con bên trong thẻ tbody có id là itemTbody
	const myNode = document.getElementById("itemTbody");
	myNode.innerHTML = "";

	//shorthand: đoạn này kiểm tra nếu mảng items != null && item != undefined
	if (items) {
		//dùng thẻ lưu html của các row trong table Item
		let rowParts = "";

		//vòng lặp
		for (var i = 0; i < items.length; i++) {
			let item = items[i]; // lấy ra item cụ thể trong mảng items
			let rowPart = `<tr>
				<td>${item.LuaChon}</td>
				<td>${item.MaHang}</td>
				<td>${item.TenHang}</td>
				<td>${item.SoLuong}</td>
				<td>${item.GiaMua}</td>
				<td>${item.NgayNhap}</td>
                <td>${item.NhanHang}</td>
                <td class="del_edit">
				  		<input class="delete" type='button' value='Xóa' onclick='xoaHang("${item.MaHang}");' />
						<input class="edit" type='button' value='Sửa' onclick='suaHang("${item.MaHang}");' />
				</td>
				  </tr>`;

			//thêm 1 row vào trong rowParts: nó chính là cách viết: rowParts = rowParts + rowPart
			rowParts += rowPart;
		}

		myNode.innerHTML = rowItems;
	}
};

//gọi hàm để gen ra màn hình các thông tin của hàng
genItemTable();

let LuuHang = function () {
	//đoạn này lấy giá trị trong form thêm mới hàng
	let luaChon_1 = document.getElementById("txtLuaChon").innerHTML;
	luaChon_1 = '<input type="checkbox" id="txtLuaChon" name="selectMore"/>' ;
	let luaChon = luaChon_1;

	let maHang = document.getElementById("txtMaHang").value;
	let tenHang = document.getElementById("txtTenhang").value;
	let soLuong = document.getElementById("txtSoLuong").value;
	let giaMua = document.getElementById("txtGiaMua").value;
	let ngayNhap = document.getElementById("txtNgayNhap").value;
	let nhanHang = document.getElementById("txtNhanHang").value;

	//kiểm tra dữ liệu hợp lệ
	let isHangHopLe = kiemTraDuLieuHang(
		maHang,
		tenHang,
		soLuong,
		giaMua,
		ngayNhap,
		nhanHang,
	);
	if (isHangHopLe) {
		let item = {
			LuaChon: luaChon,
			Mahang: maHang,
			TenHang: tenHang,
			SoLuong: soLuong,
			GiaMua: giaMua,
			NgayNhap: ngayNhap,
			NhanHang: nhanHang,
		};

		items.push(item);

		genItemTable();

		//sau khi lưu dữ liệu xong, clear form
		document.getElementById("newItemForm").reset();
	}
};

//hàm này để ktra dữ liệu hàng hóa là hợp lệ hay không, nếu hợp lệ trả về true, sai thì trả về false
let kiemTraDuLieuHang = function (maHang, tenHang, soLuong, giaMua, ngayNhap, nhanHang) {
	let valid = false;

	if (maHang) {
		if (tenHang) {
			if (soLuong) {
				if (giaMua) {
					if (ngayNhap) {
						if (nhanHang) {
							valid = true;
						} else {
							alert("Nhãn hàng không được để trống.");
						}
					} else {
						alert("Ngày nhập không được để trống.");
					}
				} else {
					alert("Giá mua không được để trống.");
				}
			} else {
				alert("Số lượng không được để trống.");
			}
		} else {
			alert("Tên hàng không được để trống.");
		}
	} else {
		alert("Mã hàng không được để trống.");
	}

	return valid;
};

//hàm xóa hàng, truyền vào mã hàng,
let xoaHang = function (maHang) {

	//hàm confirm: bật lên thông báo xác nhận
	if (confirm(`bạn có muốn xóa hàng ${maHang} không?`)) {

		for (var i = 0; i < items.length; i++) {
			let item = items[i]; // lấy ra item cụ thể trong mảng items

			//nếu mã sinh viên truyền vào, trùng với mã sinh viên trong mảng items, thì sẽ xóa sinh viên đó
			if (item.MaSV.toUpperCase() == maHang.toUpperCase()) {
				items.splice(i, 1);
			}
		}
		genItemTable();
	}
}

