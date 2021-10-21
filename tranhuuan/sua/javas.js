
    function addtion(){
		let s1=document.getElementById("s1").value;
		let s2=document.getElementById("s2").value;
        let cong;
        cong=parseInt(s1)+parseInt(s2);
        document.getElementById("output").innerHTML='<strong>'+cong+'</strong>';
    }
    
    function subtraction(){
		let s1=document.getElementById("s1").value;
		let s2=document.getElementById("s2").value;
        let tru;
        tru=parseInt(s1)-parseInt(s2);
        document.getElementById("output").innerHTML='<strong>'+tru+'</strong>';
    }
    
    function multiplication(){
		let s1=document.getElementById("s1").value;
		let s2=document.getElementById("s2").value;
        let nhan;
        nhan=parseInt(s1)*parseInt();
        document.getElementById("output").innerHTML='<strong>'+nhan+'</strong>';
    }
    
    function division(){
		let s1=document.getElementById("s1").value;
		let s2=document.getElementById("s2").value;
        let chia;
        chia=parseInt(s1)/parseInt();
        document.getElementById("output").innerHTML='<strong>'+chia+'</strong>';
    }
	
	/*
	cách viết 2 sử dụng hàm onload, cách này thì em phải sử dụng cách viết bind sự kiên onclick vào thẻ.
	
	gia su the button cua em dang khai bao nhu nay
	    <input type="button" value="Addtion(+)" onclick="addtion()" id='btnAdd'/> 
		
	//đoạn nay bind sự kiên click cho thẻ button có id là btnAdd
	
	
	
	
	lúc đó cái myfunction của em troong se sẽ như này
	
	function myfunction() {
		
		 document.getElementById('btnAdd').addEventListener('click', function () {
		 		let s1=document.getElementById("s1").value;
		      let s2=document.getElementById("s2").value;	
        result.innerHTML += this.value;
    });
	}
	*/