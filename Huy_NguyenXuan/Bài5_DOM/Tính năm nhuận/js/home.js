// let year = parseInt(prompt("Moi nhap nam | Enter a year"));

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             alert(year + " la nam nhuan | is a leap year");
//         }   else {
//             alert(year + " KHONG la nam nhuan | is NOT a leap year");
//         }
//     }   else {
//         alert(year + " la nam nhuan | is a leap year");
//     }
// }   else {
//     alert(year + " KHONG la nam nhuan | is NOT a leap year");
// }

let year = parseInt(prompt("Enter a year"));
let isLeapYear = false;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            isLeapYear = true;
        }
    }   else {
        isLeapYear = true;
    }
}
if (isLeapYear) {
    alert(year + " is a leap year");
  } else {
    alert(year + " is NOT a leap year");
  }