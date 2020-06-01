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
var methaSymp;
var diseaseName;
var mainDiv = document.querySelector('.disease__buttoncontainer');
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

let control = new Controller();

var registerUser = function (event) {
  inputPass = document.querySelector(".landingRegister__input--password");
  inputMail = document.querySelector(".landingRegister__input--mail");
  firebase.auth().createUserWithEmailAndPassword(inputMail.value, inputPass.value).then(function (event) {
    getUpdates(inputMail.value, true);
    handleGoToMain();
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

//Aqui empiezan las interacciones como cambios de pantalla

// codigo base: document.querySelector("").addEventListener('click', function(){}); 

document.querySelector(".symptomSel__back").addEventListener('click', function () {
  handleGoToMain();
});
document.querySelector(".disease__back").addEventListener('click', function () {
  document.querySelector(".landingLogIn").style.display = "none";
  document.querySelector(".landingRegister").style.display = "none";
  document.querySelector(".navegationBar").style.display = "flex";
  document.querySelector(".initialScreen").style.display = "none";
  document.querySelector(".disease").style.display = "none";
  document.querySelector(".gmaps").style.display = "none";
  document.querySelector(".symptomSel").style.display = "none";
  document.querySelector(".diseaseSel").style.display = "flex";
  document.querySelector(".videos").style.display = "none";
  window.scrollTo(0, 0);

  mainDiv.innerHTML = '';
});

document.getElementById("diseaseBack").addEventListener('click', function () {
  handleGoToMain();
});
document.getElementById("userProfileBack").addEventListener('click', function () {
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
    getUpdates(inputUserLogIn.value, true);
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
    id: parseInt((Math.random() * 100), 100)
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
      var myData = doc.data();
      let theNickname = myData.nickname;
      let theAge = myData.age;
      let theSex = myData.sex;
      let theId = myData.id;

      /*if (deep) {
        // usuario principal
        setMainUser(myData)
      } else {
        // parte de la familia
        addToFamily(myData)
      }*/

      //console.log(myData);
      if (deep && myData.familyMembers && myData.familyMembers.length) {
        myData.familyMembers.forEach(function (member) {
          console.log(deep);
          console.log(member);
          document.querySelector(".userProfile__name").innerText = theNickname;
          document.querySelector(".userProfile__desc--age").innerText = theAge + " años";
          document.querySelector(".userProfile__desc--gender").innerText = theSex;
          getUpdates(member);
        });
      }

      createFamilyMembers(theNickname, theAge, theSex);


      //console.log("El nickname del usuario es: " + theNickname + ", tiene " + theAge + " años, es " + theSex + " y su ID es: " + theId);
    }
  });
}

var familyparent = document.querySelector('.userProfile__familyMembers');

var createFamilyMembers = function (nombre, edad, genero) {

  var elem = document.createElement('div');
  elem.classList.add('userProfile__member');

  elem.innerHTML = `
  <p class="userProfile__content">${nombre}</p>
  <p class="userProfile__content">${edad} ` + `Años` + `</p>
  <p class="userProfile__content">${genero}</p>
  `;
  // miembros = arreglo 4 correos


  //console.log(familyparent);
  //console.log(elem);
  familyparent.appendChild(elem);
}

/*
<div class="userProfile__member">
        <p class="userProfile__content">Juan Sanchez</p>
        <p class="userProfile__content">21 anos</p>
        <p class="userProfile__content">Masculino</p>
      </div>
*/

console.log("aqui ya envié el correo");
var handleGoToMain = function () {
  document.querySelector(".landingLogIn").style.display = "none";
  document.querySelector(".landingRegister").style.display = "none";
  document.querySelector(".navegationBar").style.display = "flex";
  document.querySelector(".initialScreen").style.display = "flex";
  document.querySelector(".disease").style.display = "none";
  document.querySelector(".gmaps").style.display = "none";
  document.querySelector(".symptomSel").style.display = "none";
  document.querySelector(".diseaseSel").style.display = "none";
  document.querySelector(".videos").style.display = "none";
  document.querySelector(".userProfile").style.display = "none";
  window.scrollTo(0, 0);
  mainDiv.innerHTML = '';
}

//Aqui termina lo de firebase

var handleGoToDiseaseSel = function () {
  //toca pasarle el nombre de la enfermedad 
  document.querySelector(".landingLogIn").style.display = "none";
  document.querySelector(".landingRegister").style.display = "none";
  document.querySelector(".navegationBar").style.display = "flex";
  document.querySelector(".initialScreen").style.display = "none";
  document.querySelector(".disease").style.display = "none";
  window.scrollTo(0, 0);
  mainDiv.innerHTML = '';
  document.querySelector(".gmaps").style.display = "none";
  document.querySelector(".symptomSel").style.display = "none";
  document.querySelector(".diseaseSel").style.display = "flex";
}
goToDisease.addEventListener('click', handleGoToDiseaseSel);

var handleGoToDisease = function () {
  //toca pasarle el nombre de la enfermedad 
  document.querySelector(".landingLogIn").style.display = "none";
  document.querySelector(".landingRegister").style.display = "none";
  document.querySelector(".navegationBar").style.display = "flex";
  document.querySelector(".initialScreen").style.display = "none";
  document.querySelector(".disease").style.display = "block";
  document.querySelector(".gmaps").style.display = "none";
  document.querySelector(".symptomSel").style.display = "none";
  document.querySelector(".diseaseSel").style.display = "none";
  window.scrollTo(0, 0);
}
//document.querySelector(".diseaseSel__label").addEventListener('click', handleGoToDisease);

var handleGoToForm = function () {
  document.querySelector(".landingLogIn").style.display = "none";
  document.querySelector(".landingRegister").style.display = "none";
  document.querySelector(".navegationBar").style.display = "flex";
  document.querySelector(".initialScreen").style.display = "none";
  document.querySelector(".disease").style.display = "none";
  document.querySelector(".gmaps").style.display = "none";
  document.querySelector(".symptomSel").style.display = "flex";
  window.scrollTo(0, 0);
  mainDiv.innerHTML = '';
}
document.querySelector(".goToForm").addEventListener('click', handleGoToForm);

registerBtn.addEventListener('click', registerUser);
document.querySelector(".navegationBar__HomeBtn").addEventListener('click', handleGoToMain);

var handleNavegationBarUser = function () {
  document.querySelector(".navegationBar__User--On").style.display = "none";
  document.querySelector(".navegationBar__User--Off").style.display = "flex";
}
userInformation.addEventListener('click', handleNavegationBarUser);

//Barra de navegación //////////////////////////////////////////

logInBtn.addEventListener('click', handleSendInfoLogin);

document.querySelector(".navegationBar__SearchBtn").addEventListener('click', function () {
  handleGoToForm();
});

document.querySelector(".dback").addEventListener('click', function () {
  handleGoToMain();
});

document.querySelector(".dback2").addEventListener('click', function () {
  handleGoToMain();
});

document.querySelector(".navegationBar__DiseasesBtn").addEventListener('click', function () {
  handleGoToDiseaseSel();
});

document.querySelector(".navegationBar__UserBtn").addEventListener('click', function () {
  document.querySelector(".landingLogIn").style.display = "none";
  document.querySelector(".landingRegister").style.display = "none";
  document.querySelector(".navegationBar").style.display = "flex";
  document.querySelector(".initialScreen").style.display = "none";
  document.querySelector(".disease").style.display = "none";
  document.querySelector(".gmaps").style.display = "none";
  document.querySelector(".symptomSel").style.display = "none";
  document.querySelector(".diseaseSel").style.display = "none";
  window.scrollTo(0, 0);
  mainDiv.innerHTML = '';
  document.querySelector(".videos").style.display = "none";
  document.querySelector(".userProfile").style.display = "flex";
});

control.test();
control.logIn();

console.log("deberia poder seguir");

// Intento de formulario /////////////////////////////////////

var diseases = control.logic.diseases;
var parent = document.querySelector('.symptomSel__mainform');

diseases.forEach(function (disease) {
  var label = document.createElement('label');
  label.classList.add('symptomSel__label');
  label.innerHTML = `
    <input type="checkbox" class="symptomSel__checkbox" id="" data-sym="${disease.methaSymptom}">
    <span>${disease.methaSymptom}</span>
  `;


  var subParent = document.createElement('div');
  subParent.classList.add('symptomSel__mainform');
  subParent.classList.add('symptomSel__mainform--sub');

  for (let i = 0; i < disease.symptoms.length; i++) {
    var sub = document.createElement('label');
    sub.classList.add('symptomSel__label');
    sub.classList.add('symptomSel__label--sub');

    sub.innerHTML = `
    <input type="checkbox" class="symptomSel__nocheck" >
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

var subsys = document.querySelectorAll(".symptomSel__mainform--sub");

subsys.forEach(function (elem) {

  elem.style.display = "none";
});;


document.querySelectorAll('.symptomSel__checkbox').forEach(item => {
  item.addEventListener('click', event => {

    // Determina el metasintoma
    methaSymp = item.dataset.sym;
    console.log(methaSymp);


    // cambiar el display a flex
  });

});

// mostrar y ocultar los sintomas
var meta = document.querySelectorAll('.symptomSel__checkbox')

var metaS = Array.apply(null, meta);
var subb = Array.apply(null, subsys);

var checks = new Array(12).fill(false);

for (let i = 0; i < metaS.length; i++) {

  metaS[i].addEventListener('click', event => {
    if (checks[i] == true) {
      subb[i].style.display = "none";
      checks[i] = false;
      return;
    }
    subb[i].style.display = "flex";
    checks[i] = true;
  })

};


// Lista de enfermedades

var parentDis = document.querySelector('.diseaseSel__mainform');

diseases.forEach(function (disease) {

  var label = document.createElement('label');
  label.classList.add('diseaseSel__label');
  label.innerHTML = `
    <span class="diseaseSel__checkbox" data-name="${disease.name}">${disease.name}</span>
  `;

  parentDis.appendChild(label);

});

// Seleccionar enfermedad

document.querySelectorAll('.diseaseSel__checkbox').forEach(item => {
  item.addEventListener('click', event => {
    // Determina la enfermedad seleccionada
    diseaseName = item.dataset.name;
    console.log(diseaseName);

    handleDiseaseScreen(diseaseName);
    handleGoToDisease();

  });

});

//Enfermedades contenido

var handleDiseaseScreen = function (disease) {
  var diseasesArray = control.logic.diseases;
  var title;
  var description;
  var images;
  var link;
  var symptoms;
  var reasons = "Texto de ¿Por qué sucede?";
  var idiseases;


  for (let i = 0; i < diseasesArray.length; i++) {
    if (disease == diseasesArray[i].name) {
      //recibe la info de la enfermedad (la info de arriba)
      title = diseasesArray[i].name;
      description = diseasesArray[i].definition;
      images = diseasesArray[i].img;
      link = diseasesArray[i].link;
      symptoms = diseasesArray[i].symptoms;
    }
  }
  // document.getElementById('replace-me').innerText = someVar
  document.getElementById('diseaseTitle').innerText = title;
  document.getElementById('diseaseDescription').innerText = description;
  document.getElementById('goToYouTubeVideo').addEventListener('click', function () {
    window.open(link);

  });

  //////////////// BOTONES DE LA ENFERMEDAD////////////

  document.querySelector(".imgDisease").src = "./Images/uxpin/" + images[1];

  console.log(symptoms);

  for (let i = 0; i < (symptoms.length) / 2; i++) {

    var sub = document.createElement('button');
    sub.classList.add('disease__simbut');
    sub.classList.add('disease__simbut--disabled');

    sub.innerHTML = `
    ${symptoms[i]}
  `;

    mainDiv.appendChild(sub);

  }

  ////////////////////// Enabled - disabled /////////////////////

  var allbuts = document.querySelectorAll('.disease__simbut');


  var botoness = Array.apply(null, allbuts);

  for (let i = 0; i < botoness.length; i++) {

    botoness[i].addEventListener('click', function () {
      idiseases = i;
      console.log(idiseases);
      botoness[i].classList.toggle('disease__simbut--enabled');
      document.querySelector('.imgDisease').src = "./Images/uxpin/" + images[idiseases];
    });
  }

}


document.querySelector(".symptomSel__send").addEventListener('click', function () {

  var matching = control.logic.match(methaSymp);
  console.log(matching);

  handleDiseaseScreen(matching);
  handleGoToDisease();
});


//Pantalla de videos vinculos

document.getElementById('goToAllVideos').addEventListener('click', function () {
  document.querySelector(".landingLogIn").style.display = "none";
  document.querySelector(".landingRegister").style.display = "none";
  document.querySelector(".navegationBar").style.display = "flex";
  document.querySelector(".initialScreen").style.display = "none";
  document.querySelector(".disease").style.display = "none";
  document.querySelector(".gmaps").style.display = "none";
  mainDiv.innerHTML = '';
  document.querySelector(".symptomSel").style.display = "none";
  document.querySelector(".diseaseSel").style.display = "none";
  document.querySelector(".videos").style.display = "block";
});

document.getElementById('goToDengueVideo').addEventListener('click', function () {
  window.open('https://www.youtube.com/watch?v=9Js1CbQFUwg');
});

document.getElementById('goToAlimentosVideo').addEventListener('click', function () {
  window.open('https://www.youtube.com/watch?v=CBF5GNVuqwU');
});

document.getElementById('goToDesnutricionVideo').addEventListener('click', function () {
  window.open('https://www.youtube.com/watch?v=Cm3mncA-5Fg');
});

document.getElementById('goToSifilisVideo').addEventListener('click', function () {
  window.open('https://www.youtube.com/watch?v=OHL2KC09qnI');
});

document.getElementById('goToXenofobiaVideo').addEventListener('click', function () {
  window.open('https://www.youtube.com/watch?v=K4kponqwvbg');
});

document.getElementById('goToBajoPesoVideo').addEventListener('click', function () {
  window.open('https://www.youtube.com/watch?v=FzB9o-NtBjk');
});

document.getElementById('goToVaricelaVideo').addEventListener('click', function () {
  window.open('https://www.youtube.com/watch?v=WGPiDjRQkuE');
});