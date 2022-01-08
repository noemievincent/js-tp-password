const ShowBtnElt = document.querySelector(".showPass");
const PasswordElt = document.querySelector("#password");
ShowBtnElt.addEventListener('click', (event)=> {
    if (PasswordElt.type === "password"){
        PasswordElt.type = "text";
    } else {
        PasswordElt.type = "password";
    }
})