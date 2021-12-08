let count_update = 0;

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
				<td> <input type="checkbox"></td>
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

		myNode.innerHTML = rowParts;
	}
};

//gọi hàm để gen ra màn hình các thông tin của hàng
genItemTable();

let LuuHang = function () {
	//đoạn này lấy giá trị trong form thêm mới hàng
	//let luaChon_1 = document.getElementById("txtLuaChon").innerHTML;
	//luaChon_1 = '<input type="checkbox" id="txtLuaChon" name="selectMore"/>' ;
	//let luaChon = luaChon_1;

	let maHang = document.getElementById("txtMaHang").value;
	let tenHang = document.getElementById("txtTenHang").value;
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
			//LuaChon: luaChon,
			MaHang: maHang,
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
			if (item.MaHang.toUpperCase() == maHang.toUpperCase()) {
				items.splice(i, 1);
			}
		}
		genItemTable();
	}
}
 function suaHang (maHang) {

	//hàm confirm: bật lên thông báo xác nhận
	if(confirm(`Bạn có sửa hàng ${maHang} không?`)) {
		for (var i = 0; i < items.length; i++) {
			let item = items[i]; // lấy ra item cụ thể trong mảng items

			//nếu mã hàng truyền vào, trùng với mã hàng trong mảng items, thì sẽ xóa hàng đó
			if(item.MaHang.toUpperCase() == maHang.toUpperCase()) {
				document.getElementById("txtMaHang").value = item.MaHang;
				document.getElementById("txtTenHang").value = item.TenHang;
				document.getElementById("txtSoLuong").value = item.SoLuong;
				document.getElementById("txtGiaMua").value = item.GiaMua;
				document.getElementById("txtNgayNhap").value = item.NgayNhap;
				document.getElementById("txtNhanHang").value = item.NhanHang;
				
				// Ban đầu nút Lưu hiện còn nút Update ta ẩn đi
				// Sau khi nhấn nút Sửa ta sẽ cho nút Lưu ẩn còn nút Update hiện ra
				document.getElementById("btnUpdate").type = "button";
				document.getElementById("btnSave").type = "hidden";

			}
		}
			genItemTable();
	}
}
function UpdateHang() {
	let maHang = document.getElementById("txtMaHang").value;
	let tenHang = document.getElementById("txtTenHang").value;
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
			//LuaChon: luaChon,
			MaHang: maHang,
			TenHang: tenHang,
			SoLuong: soLuong,
			GiaMua: giaMua,
			NgayNhap: ngayNhap,
			NhanHang: nhanHang,
		};

		for (var i = 0; i < items.length; i++) {
			if(count_update == i) {
				items.splice(i, 1, item);
				break;
			}
		}

		genItemTable();

		//sau khi lưu dữ liệu xong, clear form
		document.getElementById("newItemForm").reset();

		// Nút Update giờ đang hiện vì ta bắt sự kiện nút sửa còn nút Lưu bị ẩn đi
		// Sau khi nhấn nút Update ta sẽ cho nút Lưu hiện ra còn nút Update lại ẩn đi
		document.getElementById("btnSave").type = "button";
		document.getElementById("btnUpdate").type = "hidden";
	}
}