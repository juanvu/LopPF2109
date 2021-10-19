
function check(){
    
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let sinh = document.getElementById('sinh').value;
    let sex = document.getElementById('sex').value;
    let age = document.getElementById('age').value;
    let class2 = document.getElementById('class2').value;
    if(id!=""){
        if(name!=""){
            if(sinh!=""){
                  if(sex!=""){
                        if(age!=""){
                             if(class2!=""){
                                
                             }else{
                                 alert("bạn chưa nhập môn học");
                             }
                        }else{
                            alert("bạn chưa nhập tuổi");
                        }
                  }else{
                      alert("không có dữ liệu(sex)");
                  }
            }else{
                alert("bạn chưa nhập ngày tháng năm sinh");
            }
        }else{
            alert("bạn chưa nhập tên");
        }
    }else{
        alert("bạn chưa nhập id");
    }
}

function getStudent(){
    const myNode=document.getElementById("recods")
    myNode.innerHTML="";
    if(students){
        //khai báo một biến để dùng để lưu danh sách students
        let rowitems;
        for(var i=0;i<students.length;i++){
            let student=students[i];//lấy ra một student cụ thể trong danh sách students
            let rowitem=`<tr><td id='td'>${id}</td> <td id='td'>${name}</td><td id='td'>${sinh}</td><td id='td'>${sex}</td><td id='td'>${age}</td><td id='td'>${class2}</td><td>
            <input type="button" value="xóa" onclick=""/>
            <input type="button" value="sửa" onclick=""/>
            </td></tr>`;
            //thêm 1 rowitem trong vào trong rowitems 
            rowitems+=rowitem;
        }
        myNode.innerHTML=rowitems;

    }
}


function myclick() {
    check();
    let students={
        id :"A20",
        name : "nguyen thi anh",
        sinh : "1/03/2002",
        sex : "nam",
        age : "19",
        class2 : "c++",
    }
    const myNode=document.getElementById("recods");
    myNode.innerHTML="";
    let rowitems="";
    for(var i=0;i<students.length;i++){
        let student=students[i];
        let rowitem=`<tr><td id='td'>${student.id}</td> 
                        <td id='td'>${student.name}</td>
                        <td id='td'>${student.sinh}</td>
                        <td id='td'>${student.sex}</td>
                        <td id='td'>${student.age}</td>
                        <td id='td'>${student.class2}</td>
                        <td><input type="button" value="xóa" onclick=""/>
                        <input type="button" value="sửa" onclick=""/>
                        </td></tr>`;
        rowitems+=rowitem;
    }
    myNode.innerHTML=rowitems;
}