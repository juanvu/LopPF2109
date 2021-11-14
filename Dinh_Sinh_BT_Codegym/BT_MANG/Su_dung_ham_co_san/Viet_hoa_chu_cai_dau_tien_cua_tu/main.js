
// let strTxt = window.prompt("Nhập vào chuỗi của bạn")
// const str = strTxt.toString();
// const result = [str[0]];

// for(let i = 0; i < str.length-1; i++) {
//     if((str[i] == '&nbsp') && (str[i+1] == '&nbsp')){
//         continue;
//     }else if ((str[i] != '&nbsp') && (str[i+1] == '&nbsp')){
//         result.push("&nbsp");
//     }
//     else if ((str[i] == '&nbsp') && (str[i+1] != '&nbsp')){
//       result.push(str[i+1].toUpperCase());
//     }else {
//       result.push(str[i].toLowerCase());
//     }
// }
// let resultEnd = result.join('');
// document.write(resultEnd);


let txt = window.prompt("Nhập vào chuỗi của bạn :");

function toUpper(str) {
  return str
      .toLowerCase()
      .split(' ')
      .map(function(Word) {
          console.log("First capital letter: "+Word[0]);
          console.log("remain letters: "+ Word.substr(1));
          return Word[0].toUpperCase() + Word.substr(1);
      })
      .join(' ');
   }


document.write("Chuỗi của bạn sau khi khi viết hoa chữ cái đầu: " + toUpper(txt));
