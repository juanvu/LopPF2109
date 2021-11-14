let dics = [
    {"key": "hello","vietnam":"xin chao"},
    {"key": "goodbye","vietnam":"tam biet"},
    {"key": "sun","vietnam": "mat troi"},

];
let userInput = prompt("Nhap vao tu can dich");

//If userInput != undifened && userInput !=''
if(userInput) {
    let foundResult = false;
    for(let i=0; i<dics.length;i++) {
        if(dics[i].key.toUpperCase() == userInput.toUpperCase()) {
            let foundDic = dics[i];
            foundResult = true;
        alert("dich ra vietnam la: " + foundDic.vietnam);
            break;
        }
    }
    if(!foundResult) {
        alert("khong tim thay trong tu dien");
    }
} else {
    alert("de nghi nhap du lieu");
}