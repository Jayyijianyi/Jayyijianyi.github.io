function toUC(){
    let a = document.getElementById("userName");
    a.value=a.value.toUpperCase();
}

//add event listener to the element

let elUsername = document.getElementById("userName");
elUsername.addEventListener("keyup", toUC);

function checkPWLength(){
    let pw = document.getElementById("password").value;
    if (pw.length<5){
        alert("Password must be more than 5 characters.");
    } else{
        alert("Password accepted!");
    }
}

let elPassword = document.getElementById("password");
elPassword.onblur = checkPWLength;

function checkPWLength2(text){
    if(text.length<5){
        alert("Password must be more than 5 characters.");
    } else{
        alert("Password accepted!");
    }
}

let elPassword2 = document.getElementById("password2");
elPassword2.addEventListener("blur", function(){
    let a = document.getElementById("password2");
    checkPWLength2(a.value);
});