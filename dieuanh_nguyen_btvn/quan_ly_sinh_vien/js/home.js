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
				  <td><input onchange="onSelectStudentsChange()" value="${student.MaSV}" type="checkbox" name="studentCheckBox"/></td>
				  <td>${student.MaSV}</td>
				  <td>${student.HoTen}</td>
				  <td>${student.NgaySinh}</td>
				  <td>${student.Tuoi}</td>
				  <td>${student.GioiTinh}</td>
				  <td>${student.DiaChi}</td>
				  <td><input type='button' value='Xóa' onclick='xoaHocSinh("${student.MaSV}");' /></td>
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
	let ngaysinh = document.getElementById("txtNgaysinh").value;
	let thangsinh = document.getElementById("txtThangsinh").value;
	let namsinh = document.getElementById("txtNamsinh").value;
	if(ngaysinh===""|| thangsinh==="" || namsinh===""){
		alert("Ngay thang nam sinh khong duoc de trong");
		return;
	}
	ngaysinh = parseInt(ngaysinh);
	thangsinh = parseInt(thangsinh);
	namsinh = parseInt(namsinh);
	if(isNaN(ngaysinh)|| isNaN(thangsinh) || isNaN(namsinh)){
		alert("Ngay thang nam sinh phai la so nguyen");
		return;
	}
	ngaysinh = padZero(ngaysinh,2);
	thangsinh = padZero(thangsinh,2);
	namsinh = padZero(namsinh,4);

	let tuoi = document.getElementById("txtTuoi").value;
	let checkedGender = document.querySelector("input[name='gender']:checked");
	let gioitinh = checkedGender !==null?checkedGender.value:null;
	let diachi = document.getElementById("txtDiaChi").value;
	let thanhphoElem = document.getElementById("selectCity");
	let thanhpho = thanhphoElem.value;
	let quanhuyenElem = document.getElementById("selectDistrict");
	let quanhuyen = quanhuyenElem.value;
	let dob = new Date(namsinh+"-"+thangsinh+"-"+ngaysinh);
	//kiểm tra dữu liêu hợp lệ
	let isSinhVienHopLe = kiemTraDuLieuSinhVien(
		maSV,
		hoTen,
		tuoi,
		gioitinh,
		dob,
		thanhpho,
		quanhuyen
	);
	if (isSinhVienHopLe) {
		let thanhphoText = thanhphoElem.options[thanhphoElem.selectedIndex].text;
		let quanhuyenText = quanhuyenElem.options[quanhuyenElem.selectedIndex].text;
		let student = {
			MaSV: maSV,
			HoTen: hoTen,
			NgaySinh: dob.toLocaleDateString(),
			Tuoi: tuoi,
			GioiTinh: gioitinh,
			DiaChi: diachi+", "+quanhuyenText+", "+thanhphoText,
		};

		students.push(student);

		genStudentTable();

		//sau khi luu du lieu xong, clear form
		document.getElementById("newStudentForm").reset();
	}
};

//ham nay de kiem tra du lieu sinh vien hop le hay khong, neu hop le tra ve true, sai thi tra ve false
let kiemTraDuLieuSinhVien = function (maSV, hoTen, tuoi, gioitinh,dob,thanhpho,quanhuyen) {
	let valid = false;

	if (maSV) {
		if (hoTen) {
			if (tuoi) {
				if (gioitinh) {
					if (dob && dob instanceof Date){
						if (thanhpho){
							if (quanhuyen){
								valid = true;
							}	
							else{
								alert("Quan huyen khong duoc de trong.")
							}
						}
						else{
							alert("Thanh pho khong duoc de trong.")
						}
					}
					else{
						alert("Ngay sinh khong hop le.")
					}
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
	if(confirm(`bạn có muốn xóa học sinh ${maSV} không?`)) {

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


const padZero = function(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

const showCityDistricts = function(){
	let thanhpho = document.getElementById("selectCity").value;
	if (thanhpho){
		let quanhuyenElem = document.getElementById("selectDistrict");
		quanhuyenElem.value = "";
		for (var i = 0; i < quanhuyenElem.options.length; i++) {
			const option = quanhuyenElem.options[i];
			const optionCity = option.dataset.city;
			if (optionCity === thanhpho){
				option.style.display = "initial";
			}
			else{
				option.style.display = "none";
			}
		 }
	}
}

const onSelectStudentsChange = function(){
	const selectedStudents = document.querySelectorAll("input[name='studentCheckBox']:checked").length;
	document.getElementById("delete-students").style.display = selectedStudents>0?"initial":"none";
}

const xoaNhieuHocSinh = function(){
	const students = document.getElementsByName("studentCheckBox");
	students.forEach(function(student){
		if (student.checked){
			console.log(student.value);
			xoaHocSinh(student.value,false);
		}
	});
	genStudentTable();
}