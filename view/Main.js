// Autenticación del Login con firebase
var inputPass = document.querySelector(".landingR__input--password");
var inputUser = document.querySelector(".landingR__input--user");
var inputMail = document.querySelector(".landingR__input--mail");
var loginBtn = document.querySelector(".landingR__register");
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
loginBtn.addEventListener('click', registerUser);

let control = new Controller();
control.test();
control.logIn();