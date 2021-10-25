let browser = prompt('Mời nhập vào trình duyệt sử dụng');
let browserUpper = browser.toUpperCase();
switch (browserUpper) {
    case 'EDGE':
        alert("You've got the Edge!");
        break;
    case 'CHROME':
    case 'FIREFOX':
    case 'SAFARI':
    case 'OPERA':
        alert('Okay we support these browsers too');
        break;
    default:
        alert('We hope that this page looks ok!');
}