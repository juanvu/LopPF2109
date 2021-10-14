let day = prompt('Nhập chính xác thứ vào theo mẫu sau: t2,t3,t4,t5,t6,t7,cn');
let monney = parseInt(prompt('Nhập số tiền bạn có'));
let ct16 = prompt('Có Đang chỉ thị 16 hay không Nhập: yes or no');

if(day=='t2') {document.write('đi học')}
    else if(day =='t3'){document.write('nghỉ học');}
        else if(day=='t4'){document.write('đi học');}
            else if(day=='t5'){document.write('đi học');}
                else if(day=='t6'){document.write('nghỉ học');}
                 else if (day=='t7' && monney >= 100 && ct16 == "no"){document.write('đi xem phim');}
                    else if(day=='t7'&& monney <100){document.write('ở nhà')}
                    else if(day =='t7'&& ct16 != 'no') {document.write('ở nhà ngủ')}
                      else if(day =='cn' && monney !=0){document.write("đi ăn");}
                         else if(day == 'cn' && monney <= 0 ) {document.write('ở nhà')}
                            else {'ở nhà'}




                        