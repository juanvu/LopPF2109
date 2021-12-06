// khai báo các biến, mảng, object
let count = 0;
const studentList = [
    {
        studentName: "Lê Quốc Toàn",
        studentCode: "Z669701",
        phoneNumber: 09771234560,
        studentEmail: "toanngungoc@yahoo.com",
        studentGender: "Nam",
        studentClass: "Buh01",
        studentAddr: "197, Quận 8, Hồ Chí Minh"
    },
    {
        studentName: "Ngô Quang Long",
        studentCode: "Z669801",
        phoneNumber: 09776543210,
        studentEmail: "longmatnhancach@gmail.com",
        studentGender: "Nam",
        studentClass: "Buh01",
        studentAddr: "69, Đông Anh, Hà Nội"
    },
    {
        studentName: "Nguyễn Kim Sơn",
        studentCode: "Z669802",
        phoneNumber: 08465132500,
        studentEmail: "sonnhech@gmail.com",
        studentGender: "Nam",
        studentClass: "lmao01",
        studentAddr: "17, Đông Anh, Hà Nội"
    },
    {
        studentName: "Nguyễn Hồng Hạnh",
        studentCode: "Z669901",
        phoneNumber: 09293012121,
        studentEmail: "hanhcakoi@gmail.com",
        studentGender: "Nữ",
        studentClass: "lmao01",
        studentAddr: "7B, Đống Đa, Hà Nội"
    }
];
let provinceList = {
    "Hà Nội": [
        "Ba Đình", "Đống Đa", "Hoàn Kiếm", "Hai Bà Trưng", "Đông Anh", "Hoàng Mai", "Hà Đông"
    ],
    "Hồ Chí Minh": [
        "Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Thủ Đức" 
    ],
    "Thái Nguyên": [
        "Đại Từ", "Định Hóa", "Đồng Hỷ", "Phú Bình", "Võ Nhai"
    ],
    "Nam Định": [
        "Giao Thủy", "Hải Hậu", "Mỹ Lộc", "Nam Trực", "Nghĩa Hưng", "Trực Ninh"
    ]
}

// hàm reset lại các hiển thị lỗi trên Form
function resetError() {
    document.getElementById("studentName-error").innerHTML = "";
    document.getElementById("studentCode-error").innerHTML = "";
    document.getElementById("phoneNumber-error").innerHTML = "";
    document.getElementById("studentEmail-error").innerHTML = "";
    document.getElementById("studentClass-error").innerHTML = "";
}

// hàm reset nhập Form
function resetForm() {
    document.getElementById("district").innerHTML = 
    `<select id="district">
        <option value="">Chọn</option>
    </select>`;
    resetError();
    document.getElementById("btn_update").innerText = "Thêm sinh viên";
}

// thay đổi select tỉnh và quận
let province = document.getElementById("province");
for (let key in provinceList) {
    province.innerHTML += `<option value="${key}">${key}</option>`
}
function changeProvince() {
    let key = province.value;
    let districtList = provinceList[key];
    let district = document.getElementById("district");
    district.innerHTML = "";
    if (districtList != null) {
        for (let value of districtList) {
            district.innerHTML += `<option value="${value}">${value}</option>`;
        }
    }
}

// reset lại radio giới tính
function resetRadioValue(elName) {
    var ele = document.getElementsByName(elName);
    for(i = 0; i < ele.length; i++) {
        ele[i].checked = false;
    }
}

// hàm kiểm tra giá trị rỗng
function isEmpty(myVar) {
    return ((myVar === '') || (myVar === null) || (myVar === undefined) || (myVar == null));
}

// hàm kiểm tra định dạng email
function validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
       
}

// hàm kiểm tra trùng mã sinh viên
function checkMSV(maSV) {
    let trungMSV = false;
    for (let student of studentList) {
        if (student.studentCode === maSV) {
            trungMSV = true;
            break;
        } else trungMSV = false;
    }
    return trungMSV;
}

// hàm kiểm tra điều kiện nhập trong Form, nếu lỗi hiển thị lỗi
function kiemTraSV(hoTen, maSV, soDT, email, lop) {
    // kiểm tra Họ tên
	if (isEmpty(hoTen)) {
        document.getElementById("studentName-error").innerHTML = "(*) Vui lòng nhập họ và tên!";
    } else if (hoTen.length > 50) {
        hoTen = "";
        document.getElementById("studentName-error").innerHTML = "Họ tên quá dài > 50 kí tự";
    } else {
        document.getElementById("studentName-error").innerHTML = "";
    }

    // kiểm tra mã sinh viên
    if (isEmpty(maSV)) {
        document.getElementById("studentCode-error").innerHTML = "(*) Vui lòng nhập mã sinh viên!";
    } else if (maSV.length > 10) {
        maSV = "";
        document.getElementById("studentCode-error").innerHTML = "Mã sinh viên không quá 10 kí tự";
    } else if (checkMSV(maSV)) {
        maSV = "";
        document.getElementById("studentCode-error").innerHTML = "Sinh viên đã tồn tại, mời nhập lại";
    }
    else {
        document.getElementById("studentCode-error").innerHTML = "";
    }
    
    // kiểm tra số điện thoại
    if (isEmpty(soDT)) {
        document.getElementById("phoneNumber-error").innerHTML = "(*) Vui lòng nhập số điện thoại!";
    } else if (soDT.length != 10) {
        soDT = "";
        document.getElementById("phoneNumber-error").innerHTML = "Số điện thoại không hợp lệ";
    } else {
        document.getElementById("phoneNumber-error").innerHTML = "";
    }

    // kiểm tra email
    if (isEmpty(email)) {
        document.getElementById("studentEmail-error").innerHTML = "(*) Vui lòng nhập email!";
    } else if (!validateEmail(email)) {
        email = "";
        document.getElementById("studentEmail-error").innerHTML = "Email không đúng định dạng";
    } else {
        document.getElementById("studentEmail-error").innerHTML = "";
    }

    // kiểm tra lớp
    if (isEmpty(lop)) {
        document.getElementById("studentClass-error").innerHTML = "(*) Vui lòng nhập lớp!";
    } else if (lop.length > 10) {
        lop = "";
        document.getElementById("studentClass-error").innerHTML = "Tên lớp quá dài > 10 ký tự";
    } else {
        document.getElementById("studentClass-error").innerHTML = "";
    }

    return (hoTen && maSV && soDT && email && lop);
};

// hàm thêm sinh viên vào mảng studentList
function addStudent() {
    document.getElementById("btn_update").innerText = "Thêm sinh viên";
    let index = document.getElementById("index").value;
    let studentName = document.getElementById("studentName").value;
    let studentCode = document.getElementById("studentCode").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let studentEmail = document.getElementById("studentEmail").value;
    let studentGender = "";
    if (document.getElementById("male").checked) {
        studentGender = document.getElementById("male").value;
    } else if (document.getElementById("female").checked) {
        studentGender = document.getElementById("female").value;
    }
    let studentClass = document.getElementById("studentClass").value;
    let studentProvince = document.getElementById("province").value;
    let studentDistrict = document.getElementById("district").value;
    let studentAddr2 = document.getElementById("studentAddr").value;
    let studentAddr = studentAddr2 + ", " + studentDistrict + ", " +  studentProvince;

    // kiểm tra xem giá trị nhập là thêm mới hay chỉnh sửa
    if (index != "") {
        let student = {
            studentName: studentName,
            studentCode: studentCode,
            phoneNumber: phoneNumber,
            studentEmail: studentEmail,
            studentGender: studentGender,
            studentClass: studentClass,
            studentAddr: studentAddr,
        };
        studentList[index] = student;
        showStudent();
        document.getElementById("inputForm").reset();
    } else {
        let checkSV = kiemTraSV(studentName, studentCode, phoneNumber, studentEmail, studentClass);
        if (checkSV) {
            let student = {
                studentName: studentName,
                studentCode: studentCode,
                phoneNumber: phoneNumber,
                studentEmail: studentEmail,
                studentGender: studentGender,
                studentClass: studentClass,
                studentAddr: studentAddr,
            };
            studentList.push(student);
            showStudent();
            document.getElementById("inputForm").reset();
        }
    };
}

// hàm hiển thị danh sách sinh viên ra giao diện
function showStudent() {
    document.getElementById("result").innerHTML = "";
    for (let index = 0; index < studentList.length; index++) {
        document.getElementById("result").innerHTML += `
        <tr>
            <td>${index+1}</td>
            <td>${studentList[index].studentName}</td>
            <td>${studentList[index].studentCode}</td>
            <td>${studentList[index].phoneNumber}</td>
            <td>${studentList[index].studentEmail}</td>
            <td>${studentList[index].studentGender}</td>
            <td>${studentList[index].studentClass}</td>
            <td>${studentList[index].studentAddr}</td>
            <td><button class="btn btn-warning" onclick="editStudent(${index})">Sửa</button></td>
            <td><button class="btn btn-danger" onclick="deleteStudent(${index})">Xóa</button></td>
        </tr>
    `;
    }
}

// hàm xóa sinh viên trong danh sách
function deleteStudent(index) {
    if (window.confirm(`Bạn có muốn xóa sinh viên ${studentList[index].studentName} có mã sinh viên ${studentList[index].studentCode}?`)) {
        studentList.splice(index, 1);
        showStudent();
    }
}

// hàm fill sinh viên cần sửa ra Form để sửa
function editStudent(index) {
    if (window.confirm(`Bạn có muốn sửa sinh viên ${studentList[index].studentName} có mã sinh viên ${studentList[index].studentCode}?`)) {
        let student = studentList[index];
        document.getElementById("index").value = index;
        document.getElementById("studentName").value = student.studentName;
        document.getElementById("studentCode").value = student.studentCode;
        document.getElementById("phoneNumber").value = student.phoneNumber;
        resetRadioValue("gender");
        document.getElementById("studentEmail").value = student.studentEmail;
        document.getElementById("studentClass").value = student.studentClass;
        document.getElementById("district").innerHTML =
            `<select id="district">
                <option value="">Chọn</option>
            </select>`;
        document.getElementById("province").value = "";
        document.getElementById("studentAddr").value = "";
        document.getElementById("btn_update").innerText = "Cập nhật";
        resetError();
    }
}



