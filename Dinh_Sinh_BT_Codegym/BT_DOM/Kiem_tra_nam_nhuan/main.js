let year = parseInt(prompt("Nhập vào năm bạn muốn tính :"));
let isLeapYear = false;

if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      isLeapYear = true;
    }
  } else {
    isLeapYear = true;
  }
}

if (isLeapYear) {
  alert(year + " là một một năm nhuận");
} else {
  alert(year + " không phải là năm nhuận");
}