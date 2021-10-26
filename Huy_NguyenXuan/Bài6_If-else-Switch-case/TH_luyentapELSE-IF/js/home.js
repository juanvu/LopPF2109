let userName = prompt("Mời nhập tên: ", '');
if (userName == 'Admin') {
    let pass = prompt('Password: ', '');
    if (pass == 'TheMaster') {
        alert('Welcome');
    }   else if (pass == null) {
        alert('Canceled.');
    }   else {
        alert('Wrong password');
    }
}   else if (userName == null) {
    alert('Canceled');
}   else {
    alert("I don't know you");
}