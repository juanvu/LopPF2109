let showResult = function() {
    let content = document.getElementById('myText').value;

    if (content.startsWith('')) {
        let result = content.toUpperCase();
        document.getElementById('result').innerText = result;
    }
}