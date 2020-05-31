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
var gmaps = document.querySelector(".gmaps");
var gmapsBtn = document.querySelector(".gomap");
var goToDisease = document.querySelector(".goToDisease");

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
var firestore = firebase.firestore();

var getInfo = function () {
  console.log("al cargar el body sale esto");
}

var registerUser = function (event) {
  inputPass = document.querySelector(".landingRegister__input--password");
  inputMail = document.querySelector(".landingRegister__input--mail");
  firebase.auth().createUserWithEmailAndPassword(inputMail.value, inputPass.value).then(function (event) {
    handleGoToMain();
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

//Aqui termina lo de firebase

//Aqui empiezan las interacciones como cambios de pantalla

// codigo base: document.querySelector("").addEventListener('click', function(){}); 

document.querySelector(".symptomSel__back").addEventListener('click', function(){
  handleGoToMain();
});
document.querySelector(".disease__back").addEventListener('click', function(){
  handleGoToMain();
});

var handleGoToRegister = function (event) {
  document.querySelector(".landingLogIn").style.display = "none";
  document.querySelector(".landingRegister").style.display = "flex";
}
goToRegisterBtn.addEventListener('click', handleGoToRegister);

var handleSendInfoLogin = function (event) {
  console.log("entré al sendinfoLogin");
  inputUserLogIn = document.querySelector(".landingLogIn__input--user");
  console.log(inputUserLogIn.value);
  inputPasswordLogIn = document.querySelector(".landingLogIn__input--password");
  console.log(inputPasswordLogIn.value);
  sendQuantity();
  firebase.auth().signInWithEmailAndPassword(inputUserLogIn.value, inputPasswordLogIn.value).then(function (user) {
    console.log("El usuario se conectó");
    //getUpdates();
    handleGoToMain();
  }).catch(function (error) {
    //error
  });
}
logInBtn.addEventListener('click', handleSendInfoLogin);

var sendQuantity = function (event) {
  console.log("Esto es antes de enviar la información a la base de datos");
  var username = document.querySelector(".landingLogIn__input--user").value;
  var docRefColection = firestore.doc("/" + username + "/Caracteristicas del usuario");
  docRefColection.set({
    nickname: username,
    age: 40,
    sex: "male",
    familyMembers: ["handemore7@gmail.com", "correo1@gmail.com", "correo2@gmail.com", "correo3@gmail.com"],
    id: 101011,
  }).then(function () {
    console.log("se envió la info");

  }).catch(function (error) {
    console.log('Nooooo se mandó la info,', error);
  });
}

var getUpdates = function (username, deep) {
  //console.log("entré al getUpdates!!!!!!!!!!");
  //let username = document.querySelector(".landingLogIn__input--user").value;
  var docRefColection = firestore.doc("/" + username + "/Caracteristicas del usuario");
  docRefColection.get().then(function (doc) {
    if (doc && doc.exists) {
      const myData = doc.data();
      let theNickname = myData.nickname;
      let theAge = myData.age;
      let theSex = myData.sex;
      let theId = myData.id;

      if (deep) {
        // usuario principal
        //setMainUser(myData)
      } else {
        // parte de la familia
        //addToFamily(myData)
      }

      //console.log(myData.familyMembers)
      if (deep && myData.familyMembers && myData.familyMembers.length) {
        myData.familyMembers.forEach(function (member) {
          getUpdates(member);
        })
      }
      //console.log("El nickname del usuario es: " + theNickname + ", tiene " + theAge + " años, es " + theSex + " y su ID es: " + theId);
    }
  });
}

getUpdates('handemore7@gmail.com', true);

var handleGoToMain = function () {
  document.querySelector(".landingLogIn").style.display = "none";
  document.querySelector(".landingRegister").style.display = "none";
  document.querySelector(".navegationBar").style.display = "flex";
  document.querySelector(".initialScreen").style.display = "flex";
  document.querySelector(".disease").style.display = "none";
  document.querySelector(".gmaps").style.display = "none";
  document.querySelector(".symptomSel").style.display = "none";
}

var handleGoToDisease = function () {
  handleDiseaseScreen("Dengue"); //toca pasarle el nombre de la enfermedad
  document.querySelector(".landingLogIn").style.display = "none";
  document.querySelector(".landingRegister").style.display = "none";
  document.querySelector(".navegationBar").style.display = "flex";
  document.querySelector(".initialScreen").style.display = "none";
  document.querySelector(".disease").style.display = "block";
  document.querySelector(".gmaps").style.display = "none";
  document.querySelector(".symptomSel").style.display = "none";
}
goToDisease.addEventListener('click', handleGoToDisease);

var handleGoToForm = function() {
  document.querySelector(".landingLogIn").style.display = "none";
  document.querySelector(".landingRegister").style.display = "none";
  document.querySelector(".navegationBar").style.display = "flex";
  document.querySelector(".initialScreen").style.display = "none";
  document.querySelector(".disease").style.display = "none";
  document.querySelector(".gmaps").style.display = "none";
  document.querySelector(".symptomSel").style.display = "flex";
}
document.querySelector(".goToForm").addEventListener('click', handleGoToForm);

registerBtn.addEventListener('click', registerUser);
document.querySelector(".navegationBar__HomeBtn").addEventListener('click', handleGoToMain);

var handleNavegationBarUser = function () {
  document.querySelector(".navegationBar__User--On").style.display = "none";
  document.querySelector(".navegationBar__User--Off").style.display = "flex";
}
userInformation.addEventListener('click', handleNavegationBarUser);

//Barra de navegación

logInBtn.addEventListener('click', handleSendInfoLogin);

document.querySelector(".navegationBar__SearchBtn").addEventListener('click', function(){
  handleGoToForm();
});

document.querySelector(".navegationBar__DiseasesBtn").addEventListener('click', function(){
  handleGoToDisease();
});

/*document.querySelector(".navegationBar__UserBtn").addEventListener('click', function(){
  handleGoToUser();
});*/

//loginBtn.addEventListener('click', registerUser);

let control = new Controller();
control.test();
control.logIn();

console.log("deberia poder seguir");
// Intento de formulario

var diseases = control.logic.diseases;
var parent = document.querySelector('.symptomSel__mainform');
diseases.forEach(function (disease) {
  var label = document.createElement('label');
  label.classList.add('symptomSel__label');
  label.innerHTML = `
    <input type="radio" class="symptomSel__checkbox" id="" data-sym="${disease.methaSymptom}">
    <span>${disease.methaSymptom}</span>
  `;
  

  var subParent = document.createElement('div');
  subParent.classList.add('symptomSel__mainform');
  subParent.classList.add('symptomSel__mainform--sub');

  /*
  diseases.forEach(function (symptoms){
    var sub = document.createElement('label');
    sub.classList.add('symptomSel__label');
    sub.innerHTML = `
    <input type="radio" class="symptomSel__checkbox" id="" data-sym="${disease.symptoms}">
    <span>${disease.symptoms}</span>
  `;

  subParent.appendChild(sub);
  });
  */

  for (let i = 0; i < disease.symptoms.length; i++) {
    var sub = document.createElement('label');
    sub.classList.add('symptomSel__label');
    sub.classList.add('symptomSel__label--sub');
    sub.innerHTML = `
    <input type="radio" class="symptomSel__checkbox"  id="" data-sym="${disease.symptoms[i]}">
    <span>${disease.symptoms[i]}</span>
  `;

    subParent.appendChild(sub);
    
  }


  

 
  // crear padre de la sub lista (disease.symptoms)
  // iterar sub lista y crear cada label
  // añadir sub label a sub div
  // añadir sub div al parent después del label

  

  parent.appendChild(label);
  parent.appendChild(subParent);
});


document.querySelectorAll('.symptomSel__checkbox').forEach(item => {
  item.addEventListener('click', event => {
    var methaSymp = item.dataset.sym;
    console.log(methaSymp);
    // cambiar el display a flex
  });
 
});




//Enfermedades contenido
  // añadir sub div al parent después del label

  

  parent.appendChild(label);
  parent.appendChild(subParent);
});


document.querySelectorAll('.symptomSel__checkbox').forEach(item => {
  item.addEventListener('click', event => {
    var methaSymp = item.dataset.sym;
    console.log(methaSymp);
    // cambiar el display a flex
  });
 
});




//Enfermedades contenido
  // añadir sub div al parent después del label

  

  parent.appendChild(label);
  parent.appendChild(subParent);
});


document.querySelectorAll('.symptomSel__checkbox').forEach(item => {
  item.addEventListener('click', event => {
    var methaSymp = item.dataset.sym;
    console.log(methaSymp);
    // cambiar el display a flex
  });
 
});




//Enfermedades contenido
  // añadir sub div al parent después del label

  

  parent.appendChild(label);
  parent.appendChild(subParent);
});


document.querySelectorAll('.symptomSel__checkbox').forEach(item => {
  item.addEventListener('click', event => {
    var methaSymp = item.dataset.sym;
    console.log(methaSymp);
    // cambiar el display a flex
  });
 
});




//Enfermedades contenido

var handleDiseaseScreen = function (disease) {
  var diseasesArray = control.logic.diseases;
  console.log(disease);
  console.log(control);
  console.log(diseasesArray);
  var title;
  var description;
  var images = [undefined, undefined];
  var symptoms = [undefined, undefined];
  var reasons = "Texto de ¿Por qué sucede?";
  var attentionPaths = undefined;
  var preventionMethods = "link al video de YouTube"
  //Creo que habria que recorrer el arreglo de las enfermedades y matchear lo que recibe esta función (la enfermedad) con el objeto del arreglo de enfermedades y extraer esa información de dicha enfermedad.

  for (let i = 0; i < diseasesArray.length; i++) {
    if (disease == diseasesArray[i].name) {
      //recibe la info de la enfermedad (la info de arriba)
      title = diseasesArray[i].name;
      description = diseasesArray[i].definition;
    }
  }
  // document.getElementById('replace-me').innerText = someVar
  document.getElementById('diseaseTitle').innerText = title;
  document.getElementById('diseaseDescription').innerText = description;
}
document.getElementById('goToYouTubeVideo').addEventListener('click', function(){
  window.open('https://www.youtube.com/watch?v=9Js1CbQFUwg');
});



