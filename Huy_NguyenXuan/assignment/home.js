// Khai báo biến: students, kiểu dữ liệu mảng
let students = [
    {
        MaSV: "DUE1114",
        HoTen: "Hoàng Thắng Toàn",
        Tuoi: 21,
        NgaySinh: '12/12/1998',
        GioiTinh: 'Nam',
        DiaChi: "Tổ 10, Long Biên, Hà Nội",
        SLSach: 1,
        NgoaiKhoa: 90,
    }
];
// Khai báo hàm getStudentTable_ hiển thị bên trong thẻ tbody id=studentTbody
let getStudentTable = function() {
    //code này xóa toàn bộ các thẻ con bên trong thẻ tbody có id là studentTbody
    const myNode = document.getElementById("studentTbody");
	myNode.innerHTML = "";
    //shorthand: đoạn này kiểm tra nếu mảng students != null && student != undefined
    if (students) {
        //Dùng để lưu html của các row trong table Student
        let rowItems = '';
        //Vòng lặp
        for (var i = 0; i < students.length; i++) {
			let student = students[i]; // lấy ra student cụ thể trong mảng students
			let rowItem = `<tr>
				<td><input onchange="onSelectStudentsChange()" value="${student.MaSV}" type="checkbox" name="studentCheckBox"/></td>
				<td>${student.MaSV}</td>
				<td>${student.HoTen}</td>
				<td>${student.Tuoi}</td>
				<td>${student.NgaySinh}</td>
				<td>${student.GioiTinh}</td>
				<td>${student.DiaChi}</td>
				<td>${student.SLSach}</td>
				<td>${student.NgoaiKhoa}</td>
                
				<td class="del-edit">
                    <label for=''>
				  	    <input class="form-del-edit" type='button' value='Xóa' onclick='xoaHocSinh("${student.MaSV}");' />
				  	    <input class="form-del-edit" type='button' value='Sửa' onclick='suaHocSinh("${student.MaSV}");' />
                    </label>
				</td>
				</tr>`;
			//thêm 1 row vào trong rowItems: nó chính là cách viết: rowItems = rowItems + rowItem
			rowItems += rowItem;
		}
		myNode.innerHTML = rowItems;
    }
}
//Gọi hàn để get ra màn hình các thông tin của sinh viên
getStudentTable();

let SaveSinhVien = function() {
    //Lấy giá trị trong form thêm mới học sinh
    let maSV = document.getElementById('txtMaSV').value;
    let hoTen = document.getElementById('txtHoTen').value;   
    let tuoi = document.getElementById('txtTuoi').value;    
    //Ở đây khi lấy được giá trị ngày nhập vào, ta tách chuỗi thành các phần tử nhỏ hơn bằng hàm split()
    let ngaySinh = document.getElementById('txtDate').value;
    //tách bằng hàm split('kí tự',số lượng tách) ;đảo ngược thứ tự bằng hàm reverse() và chuyển vào hàm mới bằng join()
    ngaySinh = ngaySinh.split('-',3).reverse().join('/');
    //Cách 2: thay thế kí tự '-' mặc định thành '/' bằng hàm replace()
    //ngaySinh = ngaySinh.split('').reverse().join('');
    //ngaySinh = ngaySinh.replace(/-/g,'/');
    let gioiTinh = '';
    //Khai báo biến check có giá trị true/false
    let check = document.getElementById('male').checked;
    if(check) {
        gioiTinh = 'Nam';
    } else {
        gioiTinh = 'Nữ';
    }
    let diaChi = document.getElementById('txtDiaChi').value;
    let thanhPhoElement = document.getElementById('selectCity');
    let thanhPho = thanhPhoElement.value;
    let quanHuyenElement = document.getElementById('selectDistrict');
    let quanHuyen = quanHuyenElement.value;
    let sLSach = document.getElementById('txtSach').value;
    let ngoaiKhoa = document.getElementById('txtNgoaiKhoa').value;

    //Kiểm tra dữ liệu hợp lệ
    let isSinhVienHopLe = kiemTraDuLieuSinhVien(
        maSV,
        hoTen,
        tuoi,
        ngaySinh,
        gioiTinh,
        diaChi,
        quanHuyen,
        thanhPho,
        sLSach,
        ngoaiKhoa
    );
    if (isSinhVienHopLe) {
        let thanhPhoText = thanhPhoElement.options[thanhPhoElement.selectedIndex].text;
        let quanHuyenText = quanHuyenElement.options[quanHuyenElement.selectedIndex].text;
        if (quanHuyenText == '--Chọn Quận/Huyện--') {
            quanHuyenText = '';
        } else {
            quanHuyenText = ', ' + quanHuyenText;
        }
        let student = {
            MaSV: maSV,
            HoTen: hoTen,
            Tuoi: tuoi,
            NgaySinh: ngaySinh,
            GioiTinh: gioiTinh,
            DiaChi: diaChi + quanHuyenText + ', ' + thanhPhoText,
            SLSach: sLSach,
            NgoaiKhoa: ngoaiKhoa,
        }
        students.push(student);

        getStudentTable();
        //Sau khi lưu dữ liệu xong, clear form
        document.getElementById('newStudentForm').reset();
    }
};
//Hàm kiểm tra dữ liệu đầu vào sinh viên hợp lệ hay không, nếu hợp lệ trả về true, sai thì trả về false
let kiemTraDuLieuSinhVien = function (maSV,hoTen,tuoi,ngaySinh,gioiTinh,diaChi,quanHuyen,thanhPho,sLSach,ngoaiKhoa) {
    let valid = false;

    if (maSV) {
        if (hoTen) {
            if (tuoi) {
                if (ngaySinh) {
                    if (gioiTinh) {
                        if (diaChi) {
                            if (thanhPho) {
                                if (sLSach) {
                                    if (ngoaiKhoa) {
                                        valid = true;
                                    } else {
                                        alert("Điểm ngoại khóa không được để trống.");
                                    }
                                } else {
                                    alert("Số lượng sách mượn thư viện không được để trống.");
                                }
                            } else {
                                alert("Thành phố không được để trống.");
                            }
                        } else {
                            alert("Địa chỉ không được để trống.");
                        }
                    } else {
                        alert("Giới tính không được để trống.");
                    }
                } else {
                    alert("Bạn cần điền đầy đủ ngày tháng năm sinh.");
                }
            } else {
                alert("Tuổi không được để trống.");
            }
        } else {
            alert("Họ và Tên không được để trống");
        }
    } else {
        alert("Mã Sinh Viên không được để trống.");
    }
    return valid;
}

//Hàm xóa sinh viên, truyền vào mã SV
let xoaHocSinh = function (maSV) {
    //Hàm confirm: thông báo xác nhận xóa
    if (confirm(`Bạn có muốn xóa học sinh ${maSV} không?`)) {
        for (var i = 0; i < students.length; i++) {
            let student = students[i]; //Lấy ra student cụ thể trong mảng students
            //Nếu mã sinh viên truyền vào, trùng với mã sinh viên trong mảng students, thì sẽ xóa sinh viên đó
            if (student.MaSV.toUpperCase() == maSV.toUpperCase()) {
                students.splice(i,1);
            }
        }
        getStudentTable();
    }
}
//Hàm sử sinh viên, truyền vào mã SV
function suaHocSinh(maSV) {
    //Hàm confirm: bật lên thông báo xác nhận
    if (confirm(`Bạn có muốn sửa học sinh ${maSV} không?`)) {
        for (var i = 0; i < students.length; i++) {
            let student = students[i] //Lấy ra student cụ thể trong mảng students
            //nếu mã sinh viên truyền vào, trùng với mã sinh viên trong mảng students, thì sẽ sửa sinh viên đó
            if (student.MaSV.toUpperCase() == maSV.toUpperCase()) {
                document.getElementById("txtMaSV").value = student.MaSV;
                document.getElementById("txtHoTen").value = student.HoTen;
                document.getElementById("txtTuoi").value = student.Tuoi;
                // for (var i = 0; i < student.NgaySinh.length; i++) {
                // }
                student.NgaySinh;
                student.NgaySinh = student.NgaySinh.split('/',3).reverse().join('-');
                document.getElementById("txtDate").value = student.NgaySinh;
                //Trả lại giá trị GioiTinh - chưa xử lý được
                // if (GioiTinh == 'Nam') {
                //     document.getElementById('male').addEventListener('on');
                // } else {
                //     document.getElementById('female').addEventListener('onclick');
                // }
                document.getElementById("txtDiaChi").value = student.DiaChi.split(', ',1);
                document.getElementById("txtSach").value = student.SLSach;
                document.getElementById("txtNgoaiKhoa").value = student.NgoaiKhoa;
                //Ban đầu nút Lưu hiện còn nút Update ta ẩn đi
                //Sau khi nhấn nút Sửa ta sẽ cho nút Lưu ẩn còn nút Update hiện ra
                document.getElementById('btnUpdate').type = 'button';
                document.getElementById('btnSave').type = 'hidden';

                count_update = i;
            }
        }
        getStudentTable();
    }
}
// Khai báo một biến toàn cục có nhiệm vụ kiểm tra chỉ số dòng cần update;
let count_update = 0;
function UpdateSinhVien() {
	let maSV = document.getElementById("txtMaSV").value;
	let hoTen = document.getElementById("txtHoTen").value;
	let tuoi = document.getElementById("txtTuoi").value;
	let ngaySinh = document.getElementById("txtDate").value;
	ngaySinh = ngaySinh.split('-',3).reverse().join('/');
    //Cách 2: thay thế kí tự '-' mặc định thành '/' bằng hàm replace()
    //ngaySinh = ngaySinh.split('').reverse().join('');
    //ngaySinh = ngaySinh.replace(/-/g,'/');

	let gioiTinh = "";
	let check = document.getElementById("male").checked;
	if(check) {
		gioiTinh = "Nam";
	}else {
		gioiTinh = "Nữ";
	}
	let diaChi = document.getElementById("txtDiaChi").value;
    let thanhPhoElement = document.getElementById('selectCity');
    let thanhPho = thanhPhoElement.value;
    let quanHuyenElement = document.getElementById('selectDistrict');
    let quanHuyen = quanHuyenElement.value;
    let sLSach = document.getElementById('txtSach').value;
    let ngoaiKhoa = document.getElementById('txtNgoaiKhoa').value;

	//Kiểm tra dữ liệu hợp lệ
    let isSinhVienHopLe = kiemTraDuLieuSinhVien(
        maSV,
        hoTen,
        tuoi,
        ngaySinh,
        gioiTinh,
        diaChi,
        quanHuyen,
        thanhPho,
        sLSach,
        ngoaiKhoa
    );
    if (isSinhVienHopLe) {
        let thanhPhoText = thanhPhoElement.options[thanhPhoElement.selectedIndex].text;
        let quanHuyenText = quanHuyenElement.options[quanHuyenElement.selectedIndex].text;
        if (quanHuyenText == '--Chọn Quận/Huyện--') {
            quanHuyenText = '';
        } else {
            quanHuyenText = ', ' + quanHuyenText;
        }
        let student = {
            MaSV: maSV,
            HoTen: hoTen,
            Tuoi: tuoi,
            NgaySinh: ngaySinh,
            GioiTinh: gioiTinh,
            DiaChi: diaChi + quanHuyenText + ',' + thanhPhoText,
            SLSach: sLSach,
            NgoaiKhoa: ngoaiKhoa,
        }

        for (var i = 0; i < students.length; i++) {
			if(count_update == i) {
				students.splice(i, 1, student);
				break;
			}
		}

        getStudentTable();

		//sau khi luu du lieu xong, clear form
		document.getElementById("newStudentForm").reset();

		// Nút Update giờ đang hiện vì ta bắt sự kiện nút sửa còn nút Lưu bị ẩn đi
		// Sau khi nhấn nút Update ta sẽ cho nút Lưu hiện ra còn nút Update lại ẩn đi
		document.getElementById("btnSave").type = "button";
		document.getElementById("btnUpdate").type = "hidden";
	}
}

const showCity = function(){
	let thanhPho = document.getElementById("selectCity").value;
	if (thanhPho){
		let quanHuyenElement = document.getElementById("selectDistrict");
		quanHuyenElement.value = "";
		for (var i = 0; i < quanHuyenElement.options.length; i++) {
			const option = quanHuyenElement.options[i];
			const optionCity = option.dataset.city;
			if (optionCity === thanhPho){
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
	document.getElementById("delAll").style.display = selectedStudents>0?"initial":"none";
}
const xoaNhieuSinhVien = function(){
	const students = document.getElementsByName("studentCheckBox");
	students.forEach(function(student){
		if (student.checked){
			console.log(student.value);
			xoaHocSinh(student.value,false);
		}
	});
	getStudentTable();
}