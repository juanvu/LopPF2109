let englishWordElem = document.getElementById("englishWord");
let vietnameseElem = document.getElementById("vietnameseTrans");
const dictionnary = {
    "hello": "xin chao",
    "good morning": "Chao buoi sang",
    "Thank you":"Cam on"
};
englishWordElem.addEventListener("input",input);

function input(e){
    const input_word = e.target.value;
    const translated_word = translate(input_word);
    vietnameseElem.textContent = translated_word;
}

function translate(word){
    word = word.trim().toLowerCase();
    if (word !== ""){
        let englishWord;
        for (englishWord in dictionnary){
            if (englishWord.toLowerCase().trim() ===word){
                return dictionnary[englishWord];
            }
        }
    }
    return word;
}

