

 function myfunction(opre){
   
    let show=document.getElementById('show');
    let showVal=show.value;
    let newval=showVal+opre;
    show.value=newval;
}

function del_val(){

    let show=document.getElementById('show');
    let showVal=show.value;
    showVal="";
    show.value=showVal;
}

function showResultInput(){
    let show=document.getElementById('show');
    let showVal=show.value;
    let alertCmd=`alert(${showVal})`;
    eval(alertCmd);
}
