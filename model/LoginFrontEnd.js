// Al darle al ojo se muestra la contraseña como texto y al volvlerle darle se muestra como tipo password

var inputPass = document.querySelector(".inputPassword");
var inputUser = document.querySelector(".inputUser");
var hideEye = document.querySelector(".eye");
var eyeShowed = document.querySelector(".fa-eye");
var eyeHidden = document.querySelector(".fa-eye-slash");

var myFunction = function (event) {

    if (inputPass.type === 'password') {
        inputPass.type = "text";
        eyeShowed.style.display = "block";
        eyeHidden.style.display = "none";
    } else {
        inputPass.type = "password";
        eyeShowed.style.display = "none";
        eyeHidden.style.display = "block";
    }

}
//hideEye.addEventListener('click', myFunction);