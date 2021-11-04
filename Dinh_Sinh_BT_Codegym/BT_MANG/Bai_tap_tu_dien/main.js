let ObjLanguages = {
        hello: "Xin chào", 
        play: "Chơi",
        football: "Bóng đá",
        house: 'Ngôi nhà',
        music: "Âm nhạc"
}

function translateEE() {
    let txtLang = document.getElementById("inputLanguage").value;
    if(txtLang) {
        for(let lang in ObjLanguages) {
            if(lang.toLowerCase() == txtLang.toLowerCase()) {
                let resultEnd = ObjLanguages[lang];
                document.getElementById("result"). innerHTML = 
                `   <h3> Nghĩa của từ đó là :</h3>
                    <div id="result"> ${resultEnd} </div>
                
                `
                break;
            }else {
                document.getElementById("result"). innerHTML = `<div id="result">Từ đó không có trong từ điển</div>`
            }
        }
    }
}

const arrayEng = [
    'hello', 'play', 'football', 'house', 'music'
];

const arrayVie = [
    'Xin chào bạn', 'Chơi game', 'Bóng đá hay', 'Ngôi nhà đẹp', 'Âm nhạc là music'
];

function translateEA() {
    let txtLang = document.getElementById("inputLanguage").value;
    if(txtLang) {
        for(let index in arrayEng) {
            if(arrayEng[index].toUpperCase() == txtLang.toUpperCase()) {
                let resultEnd = arrayVie[index];
                document.getElementById("result"). innerHTML = 
                `   <h3> Nghĩa của từ đó là :</h3>
                    <div id="result"> ${resultEnd} </div>
                
                `
                break;
            }else {
                document.getElementById("result"). innerHTML = `<div id="result">Từ đó không có trong từ điển</div>`
            }
        }
    }
}
