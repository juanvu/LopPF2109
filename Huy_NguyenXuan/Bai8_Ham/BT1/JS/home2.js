let dics = [
    {"key": "hello","vietnam": "xin chao"},
    {"key": "goodbye","vietnam": "tam biet"},
    {"key": "sun","vietnam": "mat troi"},
];
let userInput = prompt("Moi nhap tu can dich");
if (userInput) {
    foundResult = false;
    for (let i=0;i <dics.length; i++) {
        if(dics[i].key.toUpperCase() == userInput.toUpperCase()) {
            let foundDic = dics[i];
            foundResult = true;
            alert("Dich ra vietnamese la: " + foundDic.vietnam);
            break;
        } 
    }
    if (!foundResult) {
        alert("Không tim thay trong tu dien");
    }
} else {
    alert("De nghi nhap du lieu");
}