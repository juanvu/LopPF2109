
function Calcu_moneyloan() {

    
    let money_loan = Number(document.getElementById('money_loan').value);
    let money_rate = Number(document.getElementById('money_rate').value) / 100;
    let year_loan = Number(document.getElementById('year_loan').value);

    let year1 = money_loan * money_rate;

    let result = (money_loan + (year_loan * year1));

    document.write("Số tiền cả gốc lẫn lãi sau " + year_loan + " năm là " + result + " VNĐ");
}