function tinh() {
    let tien = Number(document.getElementById("tien").value);
    let ls = Number(document.getElementById("ls").value) / 100;
    let nam = Number(document.getElementById("nam").value);
    let result = tien + ls * tien * nam;
    document.getElementById("result").innerHTML = result;
}