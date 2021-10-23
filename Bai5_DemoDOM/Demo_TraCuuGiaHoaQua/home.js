let tinhToanGiaHoaQua = function() {
	//lay gia tri cua nguoi dung nhap vao
	let tenHoaQua = document.getElementById('txtHoaQua').value;
	
	//chú ý khi so sánh chuỗi, js phân biệt chữ hoa chữ thường
	switch(tenHoaQua) {
		case "Ổi":
		case "Dưa Hấu": alert('20000 VNĐ/kg');
				break;
		case "Táo":
		case "Xoài": alert('30000 VNĐ/kg');
				break;
		case "Cam":
		case "Chôm Chôm": alert('40000 VNĐ/kg');
				break;
		case "Măng Cụt": alert('50000 VNĐ/kg');
				break;		
		default: alert('không có loại quả phù hợp.');
				break;		
	}
}
/*
Ổi: 20000 VNĐ/kg
Dưa Hấu: 20000 VNĐ/kg
Táo: 30000 VNĐ/kg
Xoài: 30000 VNĐ/kg
Cam: 40000 VNĐ/kg
Chôm Chôm: 40000 VNĐ/kg
Măng Cụt: 50000 VNĐ/kg

*/
