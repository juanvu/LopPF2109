
let students = [
    {
        Id: 2051120088,
        Name: "tranhuuan",
        ngaySinh: '17/03/2002',
        sex: 'nam',
        age: 20,
        class2: 'python',
    },
];

// cài đặt student

function getStudent() {
    let recod = document.getElementById('recods');
    recod.innerHTML = '';
    let rowItem = '';
    if (students) {

        for (let i = 0; i < students.length; i++) {
            let student = students[i];
            rowItem = `
                <tr>
                    <td>${student.Id}<td>
                    <td>${student.Name}</td>
                    <td>${student.ngaySinh}</td>
                    <td>${student.sex}</td>
                    <td>${student.age}</td>
                    <td>${student.class2}</td>
                    <td><input type='button' value='remove' onclick = 'remove(${student.Id})'/><input type='button' value='update' onclick = 'update(${student.Id})'/></td>
                <tr>
        `;
        recod.innerHTML += rowItem;
        }
        
    }

}

getStudent();
// kiểm tra thông tin sinh viên
function kiemtrathongtin(Id, name, ngaySinh, sex, age, class2) {
    let val = false;
    if(Id){
        if(name){
            if(ngaySinh){
                if(sex){
                    if(age){
                        if(class2){
                            val = true;
                        }else{
                            alert('lớp không được để trống!!');
                        }
                    }else{
                        alert('tuoi khong duoc để trống');
                    }
                }else{
                    alert('giới tính không được trống');
                }
            }else{
                alert('ngày sinh không được để trống');
            }
        }else{
            alert("tên không được để trống");
        }
    }else{
        alert('thông tin id không được để trống');
    }
    return val;
}
// lưu thông tin sinh viên lên bảng recods
function saveStudent() {
    let mssv = document.getElementById('id').value;
    let hoten = document.getElementById('name').value;
    let born = document.getElementById('born').value;
    let gioiTinh = document.getElementById('sex').value;
    let tuoi = document.getElementById('age').value;
    let lop = document.getElementById('class2').value;
    let kiemtra = kiemtrathongtin(mssv, hoten, born, gioiTinh, tuoi, lop);
    if(kiemtra == true){
        let student = {
            Id: mssv,
            Name: hoten,
            ngaySinh: born,
            sex: gioiTinh,
            age: tuoi,
            class2: lop,
        };
        students.push(student);
        getStudent();
    }
};

function remove(Id){
    for( let i = 0; i< students.length;i++){
        let student = students[i];
        if(student.Id == Id){
            students.splice(i,1);
        }
    }
    getStudent();
}

function update(Id){
    let ma = document.getElementById('id').value;
    let ten = document.getElementById('name').value;
    let sinh = document.getElementById('born').value;
    let sex = document.getElementById('sex').value;
    let tuoi = document.getElementById('age').value;
    let lop = document.getElementById('class2').value;
    for(let i = 0; i < students.length; i++){
        let student = students[i];
        if(student.Id == Id){
            ma.innerText = student.Id;
        }
    }
}
