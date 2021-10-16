//khai báo biến: students, kiểu dữ liệu mảng
let students = [
	{
		MaSV: "A123",
		HoTen: "Tran Thi Anh",
		Tuoi: 19,
		GioiTinh: 1,
		DiaChi: "Xóm 5, Tổ 10, Ha Noi",
	},
];

//khai báo hàm genStudentTable: mục đích để vẽ ra các thẻ HTML để hiển thị bên trong thẻ tbody có ID=studentTbody
let genStudentTable = function () {
	//đoạn lệnh này xóa toàn bộ các thẻ con bên trong thẻ tbody có id là studentTbody
	const myNode = document.getElementById("studentTbody");
	myNode.innerHTML = "";

	//shorthand: đoạn này kiểm tra nếu mảng students != null && student != undefined
	if (students) {
		//dùng thể lưu html của các row trong table Student
		let rowItems = "";

		//vòng lặp
		for (var i = 0; i < students.length; i++) {
			let student = students[i]; // lấy ra student cụ thể trong mảng students
			let rowItem = `<tr>
				  <td>${student.MaSV}</td>
				  <td>${student.HoTen}</td>
				  <td>${student.Tuoi}</td>
				  <td>${student.GioiTinh}</td>
				  <td>${student.DiaChi}</td>
				  <td><input type='button' value='Xóa' onclick='xoaHocSinh("${student.MaSV}");' /></td>
				  <td><input type='button' value='Sửa' onclick='suaHocSinh("${student.MaSV}");' /></td>
				  </tr>`;

			//thêm 1 row vào trong rowItems: nó chính là cách viết: rowItems = rowItems + rowItem
			rowItems += rowItem;
		}

		myNode.innerHTML = rowItems;
	}
};

//goi ham để gen ra màn hình các thông tin của sinh viên
genStudentTable();

let LuuSinhVien = function () {
	//đoạn này lấy giá trị trong form thêm mới học sinh
	let maSV = document.getElementById("txtMaSV").value;
	let hoTen = document.getElementById("txtHoTen").value;
	let tuoi = document.getElementById("txtTuoi").value;
	let gioitinh = document.getElementById("txtGioiTinh").value;
	let diachi = document.getElementById("txtDiaChi").value;

	//kiểm tra dữu liêu hợp lệ
	let isSinhVienHopLe = kiemTraDuLieuSinhVien(
		maSV,
		hoTen,
		tuoi,
		gioitinh
	);
	if (isSinhVienHopLe) {
		let student = {
			MaSV: maSV,
			HoTen: hoTen,
			Tuoi: tuoi,
			GioiTinh: gioitinh,
			DiaChi: diachi,
		};

		students.push(student);

		genStudentTable();

		//sau khi luu du lieu xong, clear form
		document.getElementById("newStudentForm").reset();
	}
	let buttionAction = document.getElementById("newStudentForm").attr('action');
	if(buttionAction == 'AddNew') {
		//thuc hien the moi
		
	} else {
		//thuc hien the moi
	}
};

//ham nay de kiem tra du lieu sinh vien hop le hay khong, neu hop le tra ve true, sai thi tra ve false
let kiemTraDuLieuSinhVien = function (maSV, hoTen, tuoi, gioitinh) {
	let valid = false;

	if (maSV) {
		if (hoTen) {
			if (tuoi) {
				if (gioitinh) {
					valid = true;
				} else {
					alert("Gioitinh ko được để trống.");
				}
			} else {
				alert("Tuoi ko được để trống.");
			}
		} else {
			alert("Ho Ten ko được để trống.");
		}
	} else {
		alert("Ma SV ko được để trống.");
	}

	return valid;
};

//hàm xóa sinh viên, truyền vào mã SV,
let xoaHocSinh = function (maSV) {

	//hàm confirm: bật lên thông báo xác nhận
	if(confirm(`Bạn có muốn xóa học sinh ${maSV} không?`)) {

		for (var i = 0; i < students.length; i++) {
			let student = students[i]; // lấy ra student cụ thể trong mảng students

			//nếu mã sinh viên truyền vào, trùng với mã sinh viên trong mảng students, thì sẽ xóa sinh viên đó
			if(student.MaSV.toUpperCase() == maSV.toUpperCase()) {
				students.splice(i,1);
			}
		}
		genStudentTable();
	}
}

//hàm sửa sinh viên, truyền vào mã SV,
let suaHocSinh = function (maSV) {

	//hàm confirm: bật lên thông báo xác nhận
	if(confirm(`Bạn có muốn sửa học sinh ${maSV} không?`)) {

		//students co 100;
		for (var i = 0; i < students.length; i++) {
			let student = students[i]; // lấy ra student cụ thể trong mảng students

			//nếu mã sinh viên truyền vào, trùng với mã sinh viên trong mảng students, thì sẽ xóa sinh viên đó
			if(student.MaSV.toUpperCase() == maSV.toUpperCase()) {
				//students.splice(i,1);
				document.getElementById("txtMaSV").value = student.MaSV;
				document.getElementById("txtHoTen").value = student.HoTen;
				document.getElementById("txtTuoi").value = student.Tuoi;
				document.getElementById("txtGioiTinh").value = student.GioiTinh;
				document.getElementById("txtDiaChi").value = student.DiaChi;
			}
		}
	}
}

