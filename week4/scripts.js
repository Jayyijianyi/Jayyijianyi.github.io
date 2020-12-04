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