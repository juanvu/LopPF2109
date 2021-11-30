const Dictionary =  {
    go: 'đi',
    eat: 'ăn',
    sleep: 'ngủ',
    copy: 'sao chép'
}
let display = document.getElementById("display");
function go() {
    let textContent = document.getElementById("inputText").value;
    for (let key in Dictionary) {
        if (key.toUpperCase() === textContent.toUpperCase()) {
            let result = `"${key}" là "${Dictionary[key]}"`;
            display.innerHTML = `<label>${result}</label>`;
            break;
        } else display.innerHTML = "Không có từ này.";
    }
    
}
