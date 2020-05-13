// Autenticación del Login con firebase
var inputPass = document.querySelector(".landingRegister__input--password");
var inputUser = document.querySelector(".landingRegister__input--user");
var inputMail = document.querySelector(".landingRegister__input--mail");
var registerBtn = document.querySelector(".landingRegister__register");
var logInBtn = document.querySelector(".landingLogIn__logIn");
var goToRegisterBtn = document.querySelector(".landingLogIn__createAccountBtn");
var inputUserLogIn = document.querySelector("landingLogIn__input--user");
var inputPasswordLogIn = document.querySelector("landingLogIn__input--password");
var userInformation = document.querySelector(".navegationBar__User");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBoMBY4QXq_jozUkArf3x1DpDqDmDnJUPM",
  authDomain: "venesalud-343cd.firebaseapp.com",
  databaseURL: "https://venesalud-343cd.firebaseio.com",
  projectId: "venesalud-343cd",
  storageBucket: "venesalud-343cd.appspot.com",
  messagingSenderId: "609634188213",
  appId: "1:609634188213:web:583da76229a774252c77fc",
  measurementId: "G-XE2LLVDFSJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var registerUser = function (event) {
  firebase.auth().createUserWithEmailAndPassword(inputUser.value, inputMail.value, inputPass.value).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

//Aqui termina lo de firebase

//Aqui empiezan las interacciones como cambios de pantalla


var handleGoToRegister = function (event) {
  document.querySelector(".landingLogIn").style.display="none";
  document.querySelector(".landingRegister").style.display="flex"; 
}
goToRegisterBtn.addEventListener('click', handleGoToRegister);

var handleSendInfoLogin = function(event) {
  inputUserLogIn = document.querySelector(".landingLogIn__input--user");
  console.log(inputUserLogIn);
  inputPasswordLogIn = document.querySelector(".landingLogIn__input--password");
  firebase.auth().signInWithEmailAndPassword(inputUserLogIn.value, inputPasswordLogIn.value).then(function(user) {
    console.log("El usuario se conectó");
    handleGoToMain();
  }).catch(function(error) {
    //error
  });
}
var handleGoToMain = function () {
  document.querySelector(".landingLogIn").style.display="none";
  document.querySelector(".landingRegister").style.display="none"; 
  document.querySelector(".navegationBar").style.display="flex"; 
  document.querySelector(".initialScreen").style.display="flex"; 
}
logInBtn.addEventListener('click', handleSendInfoLogin);
registerBtn.addEventListener('click', handleGoToMain);

var handleNavegationBarUser = function () {
  document.querySelector(".navegationBar__User--On").style.display="none";
  document.querySelector(".navegationBar__User--Off").style.display="flex"; 
}
userInformation.addEventListener('click', handleNavegationBarUser);

//loginBtn.addEventListener('click', registerUser);

let control = new Controller();
control.test();
control.logIn();