

function validation() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    var usercheck = /^[A-Za-z. ]{3,30}$/
    var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var mobilecheck = /^[789][0-9]{9}$/;

if(usercheck.test(username)){
    document.getElementById('usererror').innerHTML = "";

}else{
    document.getElementById('usererror').innerHTML = "**username is invalid";
    return false;
}


if(passwordcheck.test(password)){
    document.getElementById('passworderror').innerHTML = "";

}else{
    document.getElementById('passworderror').innerHTML = "**password is invalid";
    return false;
}

if(cpassword.match(password)){
    document.getElementById('cpassworderror').innerHTML = "";

}else{
    document.getElementById('cpassworderror').innerHTML = "**cpassword is matching";
    return false;

}
if(emailcheck.test(email)){
    document.getElementById('emailerror').innerHTML = "";

}else{
    document.getElementById('emailerror').innerHTML = "**email is invalid";
    return false;
}

if(mobilecheck.test(mobile)){
    document.getElementById('mobileerror').innerHTML = "";

}else{
    document.getElementById('mobileerror').innerHTML = "**mobile is invalid";
    return false;
}

}
 

