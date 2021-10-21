
function myfunction(){
    
    let s1=document.getElementById("s1").value;
    let s2=document.getElementById("s2").value;
    function addtion(s1,s2){
        let cong;
        cong=parseInt(s1)+parseInt(s2);
        document.getElementById("output").innerHTML='<strong>'+cong+'</strong>';
    }
    
    function subtraction(s1,s2){
        let tru;
        tru=parseInt(s1)-parseInt(s2);
        document.getElementById("output").innerHTML='<strong>'+tru+'</strong>';
    }
    
    function multiplication(s1,s2){
        let nhan;
        nhan=parseInt(s1)*parseInt(s2);
        document.getElementById("output").innerHTML='<strong>'+nhan+'</strong>';
    }
    
    function division(s1,s2){
        let chia;
        chia=parseInt(s1)/parseInt(s2);
        document.getElementById("output").innerHTML='<strong>'+chia+'</strong>';
    }
}