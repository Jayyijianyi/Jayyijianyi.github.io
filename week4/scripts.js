function toUC(){
    let a = document.getElementById("userName");
    a.value=a.value.toUpperCase();
}

//add event listener to the element

let elUsername = document.getElementById("userName");
elUsername.addEventListener("keyup", toUC);