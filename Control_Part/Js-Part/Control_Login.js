function sub() {
    let a = document.getElementById("userName");
    let b = document.getElementById("password");
    if (a.value == "" || b.value == "") {
        alert("用户名或密码不能为空");
        return false;
    }
    return true;
}