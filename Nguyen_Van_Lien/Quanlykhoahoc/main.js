
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

let genStudentTable = function () {
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
				  <td><input type='button' value='Xóa' onclick='xoaKhoaHoc("${course.MaKH}");' /></td>
				  </tr>`;

			rowItems += rowItem;
		}

		myNode.innerHTML = rowItems;
	}
};

genCourseTable();

let LuuKhoaHoc = function () {
	let MaKH = document.getElementById("txtMaKH").value;
	let TenKH = document.getElementById("txtTenKH").value;
	let TrinhDo = document.getElementById("txtTrinhDo").value;
	let Time = document.getElementById("txtTime").value;
	let GiaoVien = document.getElementById("txtGV").value;
	let HocPhi = document.getElementById("txtHP").value;

	let isKhoaHocHopLe = kiemTraDuLieuKhoaHoc(
		MaKH,
		TenKH,
		TrinhDo,
		Time,
        GiaoVien,
        HocPhi
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

		gencourseTable();

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

			if(course.maKH.toUpperCase() == maKH.toUpperCase()) {
				courses.splice(i,1);
			}
		}
		genStudentTable();
	}
}