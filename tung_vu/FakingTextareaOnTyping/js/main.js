const words = "Một con vịt bầuuu";
const wordsLength = words.length;
let letters = [];
const textareaElem = document.getElementById("input");
textareaElem.addEventListener("input",input);

function input(e){
    if(letters.length<wordsLength){
        letters.push(words.charAt(letters.length));
    }
    else{
        letters = [];
    }
    e.target.value = letters.join("");
}