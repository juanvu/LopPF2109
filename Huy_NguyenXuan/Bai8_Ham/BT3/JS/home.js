const fixText = 'Toi la nguoi Viet Nam.';

let usetInput = '';

function txtInputChanged(valueInput) {
    let txtInputLength = usetInput.length + valueInput.length;

    //neu in ra duoc chuoi thi reset lai chuoi
    if(txtInputLength > fixText.length) {
        usetInput = '';
        document.getElementById('txtInput').value = '';
    } else {
        usetInput += valueInput;
        let subStringInput = fixText.substring(0,txtInputLength);
        document.getElementById('txtInput').value = subStringInput;
    }
}

document.getElementById('txtInput')
    .addEventListener('keyup',function(event) {
    event.preventDefault();
    let txtInputLength = usetInput.length + 1;

    //Neu ma in ra du chu toi la nguoi Viet nam.'
    if(txtInputLength > fixText.length) {
        usetInput='';
        document.getElementById('txtInput').value = '';
    } else {
        usetInput += '1';
        let subStringInput = fixText.substring(0,txtInputLength);
        document.getElementById('txtInput').value = subStringInput;
    }
});