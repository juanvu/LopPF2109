const num = window.prompt("Nhập vào số của bạn");

function start() {
    if(!isNaN(num)) {
        const str = num.toString();
        const result = [str[0]];
        
        for(let i = 1; i < str.length; i++)
        {
            // Nếu 2 số liên tiếp cùng chia hết cho 2
            if((str[i-1]%2 === 0) && (str[i]%2 === 0)){
                result.push('-', str[i]);
            } else{
                result.push(str[i]);
            }
        }
        let resultEnd = result.join('');
        document.getElementById('result').innerHTML = `<div id="result"> ${resultEnd}</div>`
    }else {
        alert("Vui lòng nhập vào số");
    }
}