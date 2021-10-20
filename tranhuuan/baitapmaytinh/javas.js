function addtion(a,b){
    let cong;
    cong=parseInt(a)+parseInt(b);
    document.getElementById("output").innerHTML='<strong>'+cong+'</strong>';
}

function subtraction(a,b){
    let tru;
    tru=parseInt(a)-parseInt(b);
    document.getElementById("output").innerHTML='<strong>'+tru+'</strong>';
}

function multiplication(a,b){
    let nhan;
    nhan=parseInt(a)*parseInt(b);
    document.getElementById("output").innerHTML='<strong>'+nhan+'</strong>';
}

function division(a,b){
    let chia;
    chia=parseInt(a)/parseInt(b);
    document.getElementById("output").innerHTML='<strong>'+chia+'</strong>';
}
function myfunction(){
    let s1=document.getElementById("s1").value;
    let s2=document.getElementById("s2").value;
    addtion(s1,s2);
    subtraction(s1,s2);
    multiplication(s1,s2);
    division(s1,s2);
}