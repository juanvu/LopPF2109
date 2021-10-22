let tinhToanNgayTheoThang = function() {
	//lay gia tri cua nguoi dung nhap vao
	let thangVal = document.getElementById('txtThang').value;
	
	//chuyển sang kiểu số, dùng hàm Number
	let thangNum = Number(thangVal);
	
	switch(thangNum) {
		case 4:
		case 6:
		case 9:
		case 11: alert(' thang nay co 30 ngay'); 
				break;
		case 2: alert(' thang nay co 28 hoặc 29 ngày');
				break;
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
				alert(' thang nay co 31 ngày');
				break;		
		default: alert('nhập tháng từ 1 đến 12');
				break;
	}
}

