
function myclick(){
    let x=document.getElementById('thu').value;
    let y=document.getElementById('tien').value;
    let z=document.getElementById('chithi16').value;
    if((isNaN(y))==true){
        alert("bạn nhập lại số tiền");
    }else{
        if(z=='không chỉ thị 16'){
            if(x=='thứ 2'){
                alert('đi học');
            }else if(x=='thứ 3'){
                alert('nghỉ học');
            }else if(x=='thứ 4'){
                alert('nghỉ học');
            }else if(x=='thứ 5'){
                alert('đi học');
            }else if(x=='thứ 6'){
                alert('nghỉ học');
            }else if(x=='thứ 7'){
                if((Number(y))>=100){
                    alert('đi xem phim !');
                }else{
                    alert('ở nhà');
                }
            }else{
                if((Number(y)-100)>0){
                    alert('đi ăn!');
                }else{
                    alert('ỏ nhà');
                }
            }
        }else{
            alert('cách ly! ');
        }
    }
    
}