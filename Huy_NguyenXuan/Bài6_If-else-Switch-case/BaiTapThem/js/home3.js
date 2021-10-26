    function showResult() {
        let totalBill = document.getElementById('totalBill').value;
        let nameCustomer = document.getElementById('nameCustomer').value;
        let monthOfBirth = document.getElementById('monthOfBirth').value;
        let d = new Date();
        let discount = 0;
        if (totalBill >= 500) {
            if ((monthOfBirth-1) == d.getMonth()) {
                discount = 30;
            } else {
                discount = 20;
            }
        }   else if ((totalBill >= 400 && totalBill < 500)) {
            discount = 20;
        }   else if ((totalBill > 200 && totalBill < 400)) {
            if ((monthOfBirth-1) == d.getMonth()) {
                discount = 25;
            }   else {
                discount = 20;
            }
        }
        
        document.getElementById('showTotal').innerHTML = "<p id='showTotal'> " + "Giảm giá " + discount + '&percnt;' + '. ' + 'Tổng tiền '+ (totalBill*(1-discount/100)) + "</p>";
    }