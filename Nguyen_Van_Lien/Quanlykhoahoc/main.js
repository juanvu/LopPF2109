
let courses = [
	{
		MaKH: "c1",
		TenKH: "Nang luc tieng nhat N1",
		TrinhDo: "N1",
		Time: "1year",
		GiaoVien: "MR.Hoan",
        HocPhi: 500
	},
];

function suaKhoaHoc(maKH) {

	if(confirm(`Bạn có sửa khóa học ${maKH} không?`)) {
		for (var i = 0; i < courses.length; i++) {
			let course = courses[i];

			if(course.MaKH.toUpperCase() == maKH.toUpperCase()) {
				document.getElementById("txtMaKH").value = course.MaKH;
				document.getElementById("txtTenKH").value = course.TenKH;
				document.getElementById("txtTrinhDo").value = course.TrinhDo;
				document.getElementById("txtTime").value = course.Time;
				document.getElementById("txtGV").value = course.GiaoVien;
				document.getElementById("txtHP").value = course.HocPhi;
				
			}
		}
		genCourseTable();
	}
}

let genCourseTable = function () {
	const myNode = document.getElementById("courseTbody");
	myNode.innerHTML = "";

	if (courses) {
		let rowItems = "";

		for (var i = 0; i < courses.length; i++) {
			let course = courses[i]; 
			let rowItem = `<tr>
				  <td>${course.MaKH}</td>
				  <td>${course.TenKH}</td>
				  <td>${course.TrinhDo}</td>
				  <td>${course.Time}</td>
				  <td>${course.GiaoVien}</td>
				  <td>${course.HocPhi}</td>
				  <td><input type='button' style="background-color: red;" value='Xóa' onclick='xoaKhoaHoc("${course.MaKH}");' /></td>
				  <td><input type='button' style="background-color: yellow;" value='Sửa' onclick='suaKhoaHoc("${course.MaKH}");' /></td>
				  </tr>`;

			rowItems += rowItem;
		}

		myNode.innerHTML = rowItems;
	}
};

genCourseTable();

let LuuKhoaHoc = function () {
	let makh = document.getElementById("txtMaKH").value;
	let tenkh = document.getElementById("txtTenKH").value;
	let trinhdo = document.getElementById("txtTrinhDo").value;
	let time = document.getElementById("txtTime").value;
	let giaovien = document.getElementById("txtGV").value;
	let hocphi = document.getElementById("txtHP").value;

	let isKhoaHocHopLe = kiemTraDuLieuKhoaHoc(
		makh,
		tenkh,
		trinhdo,
		time,
        giaovien,
        hocphi
	);
	if (isKhoaHocHopLe) {
		let course = {
			MaKH: makh,
			TenKH: tenkh,
			TrinhDo: trinhdo,
			Time: time,
			GiaoVien: giaovien,
            HocPhi: hocphi
		};

		courses.push(course);

		genCourseTable();

		document.getElementById("newCourse").reset();
	}
};

let kiemTraDuLieuKhoaHoc = function (maKh, tenKH, trinhDo, time, giaoVien, hocPhi) {
	let valid = false;

	if (maKh) {
		if (tenKH) {
			if (trinhDo) {
				if (time) {
					if (giaoVien) {
                        if (hocPhi) {
                            valid = true;
                        }else {
                            alert("Hoc phi khong duoc de trong");
                        }
                    } else {
                        alert("Giao vien khong duoc de trong");

                    }
				} else {
					alert("Thoi gian ko được để trống.");
				}
			} else {
				alert("Trinh do ko được để trống.");
			}
		} else {
			alert("Ten KH ko được để trống.");
		}
	} else {
		alert("Ma KH ko được để trống.");
	}

	return valid;
};



let xoaKhoaHoc = function (maKH) {

	if(confirm(`bạn có muốn xóa khóa học ${maKH} không?`)) {

		for (var i = 0; i < courses.length; i++) {
			let course = courses[i]; 

			if(course.MaKH.toUpperCase() == maKH.toUpperCase()) {
				courses.splice(i,1);
			}
		}
		genCourseTable();
	}
}