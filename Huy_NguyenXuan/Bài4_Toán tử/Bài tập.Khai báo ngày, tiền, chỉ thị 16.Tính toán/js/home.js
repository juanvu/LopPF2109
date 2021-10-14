function calcu() {
    let x = document.getElementById('calcu_day').value;
    let y = document.getElementById('calcu_money').value;
    let z = document.getElementById('calcu_law').value;

    if((isNaN(y)) == true){
        alert("Mời bạn nhập lại số tiền");
        return;
    }   else if ((z=='Chỉ thị 16') || (z=='Chỉ thị 15')) {
            if (x=='Thứ 2') {
                alert('Học online');
            }   else if (x=='Thứ 3') {
                alert('Nghỉ học');
            }   else if (x=='Thứ 4') {
                alert('Nghỉ học');
            }   else if (x=='Thứ 5') {
                alert('Học online');
            }   else if (x=='Thứ 6') {
                alert('Học online');
            }   else if (x=='Thứ 7') {
                alert('Ở nhà');
            }   else {
                alert('Ở nhà');
            }
    }   else {
            if (x=='Thứ 2') {
                alert('Đi học');
            }   else if (x=='Thứ 3') {
                alert('Nghỉ học');
            }   else if (x=='Thứ 4') {
                alert('Nghỉ học');
            }   else if (x=='Thứ 5') {
                alert('Đi học');
            }   else if (x=='Thứ 6') {
                alert('đi học');
            }   else if (x=='Thứ 7') {
                if (y>=100) {
                    alert('Đi xem film')
                }   else {
                    alert('Ở nhà');}   
            }   else {
                if (y>=100) {
                    alert('Đi ăn')
                }   else {
                    alert('Ở nhà');}   
            }
    }
}