let text = 'BẠN LÀ MỘT ĐỨA NGỐC !!!';
let strText = text.split('');
let result = '';


function typeTextarea() {
    let key = document.getElementById("textValue").value;
    let keyLength = key.length;
    if(keyLength > 0) {
        for(let i = 0 ; i < keyLength ; i++) {
            console.log(key)
            result += strText[i];
            if( i == strText.length) {
                document.getElementById("textValue").value = '';
                result = ""; 
            }
        }
    }
    document.getElementById("textValue").value = result;
    result = ""; 
    setTimeout('typeTextarea()', 1000);
}

// document.onkeydown = function(press) {
//     switch(press.which) {
//         case 37: mouseLeft();
//         break;
  
//         case 38: mouseUp(); 
//         break;
  
//         case 39: mouseRight();
//         break;
  
//         case 40: mouseDown();
//         break;
  
//         case 13: mouseReset();
//         break;
//     }
//     e.preventDefault(); 
//   };


