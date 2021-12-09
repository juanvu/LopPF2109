function submitForm() {
    let admin = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    if(admin == "admin" && password == "123456") {
        alert("Đang vào trò chơi Plan And Zombie !!!");
        location.href = "../game/index.html";
    }else {
        alert("Bạn đã nhập sai tài khoản hoặc mật khẩu !!!");
    }
}