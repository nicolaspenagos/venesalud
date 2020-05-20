class Logic{

    constructor(){

 
        this.diseases = [];
        this.families = [];
        this.users = [];
        this.attentionpaths = [];
        this.helpCenters = [];
        this.usersMap = new Map();
        this.familiesMap = new Map();
        this.helpCenterMap = new Map(); 
        this.idCounter = 1000;
        this.idFamily = 1;
        //loadDataSet();


    }

    loadDataSet(){

        /*
        * Traer info de dataSet
        */
        // var user = new User(Name, etc...)
    }

    updateDateSet(){
         /*
        * Subir info de dataSet
        */
    }

    logIn(){
        
    }

    loadLocalData(){

        var s1 = ["Sarpullido sin picazón en las palmas de las manos y en la planta de los pies", "Llagas que no causan dolor", "Fiebre", "Cansancio", "Parálisis", "Entumecimiento", "Dolor en los musculos"];
        this.diseases.push(new Disease("Sífilis Gestacional", "Es una enfermedad de transmisión sexual causada por una bacteria. Por lo general se adquiere por el contacto sexual con una persona que está contagiada, y en este caso, la madre se la trasmite al bebé durante el embarazo. Si la infección llega al niño le provocará graves problemas de salud o incluso la muerte. Se habilitó la compatibilidad con el lector de pantalla.", "Perdida de cabello", s1));

        var s2 = ["Hinchazón abdominal", "Náuseas", "Mareos", "Escalofríos", "Fatiga", "Fiebre", "Pérdida de apetito", " Repulsión a olores fuertes", "Dolor en el abdomen", "Salivación extrema"];
        this.diseases.push(new Disease("Embarazo Adolescente", "Se refiere a los embarazos de mujeres adolescentes entre 13 y 19 años.", "Mamas sensible e hinchadas", s2 ));

        var s3 = ["Dolor articular", "Escalofríos", "Fatiga", "Fiebre", "Pérdida de apetito", "Náuseas", "Vómito", "Facilidad para desarrollar hematomas o sangrado"];
        this.diseases.push(new Disease("Dengue", "Es una infección viral transmitida por la picadura de las hembras infectadas de mosquitos del género Aedes, que se ha constituido como un problema creciente para la salud pública mundial.", "Manchas rojas en la piel", s3));

        var s4 = ["Fiebre", "Escalofríos", "Fatiga", "Sudoración", "Diarrea", "Náuseas", "Vómito", "Confusión", "Frecuencia cardíaca rápida"];
        this.diseases.push(new Disease("Malaria", "Es una infección parasitaria de la especie plasmodium transmitida por la picadura de mosquitos anofeles infectados, si esta enfermedad no se trata a tiempo puede llevar a la muerte.", "Espasmos musculares", s4 ));

        var s5 = ["Fatiga", " Fiebre", "Mareos", "Hormigueo", "Espasmos musculares", "Alucinación", "Ansiedad", "Babeo", " Confusión", "Convulsiones", "Cuello rígido", "Dificultad para tragar", "Muerte cerebral", "Pupila dilatada", "Salivación excesiva", "Vómito"];
        this.diseases.push(new Disease("Rabia humana", "Es una enfermedad zoonótica, puede llegar a ser mortal si no se detecta a tiempo, transmitida por mordeduras y arañazos de animales.", "Convulsiones", s5));

        var s6 = ["Fiebre de 38,5º C a 40,5º C", "Tos", "Escurrimiento nasal transparente, amarillo o con una mezcla de sangre", "Estornudos", "Obstrucción nasal", "Conjuntivitis", "Lesiones pequeñas e irregulares de tipo granular de color rojizo con el centro blanco azuláceo, que aparecen en la mucosa oral, en la parte interna de la mejilla."];
        this.diseases.push(new Disease("Sarampión", "Es una enfermedad sumamente contagiosa causada por un virus. Clínicamente se diferencian dos etapas en la enfermedad, la primera, es la fase en la que se dan síntomas previos al desarrollo de la enfermedad y la segunda fase, llamada eruptiva, es la fase en la que salen las erupciones en la piel.", "Erupción con manchas rojas",s6));

        var s7 = ["Comezón generalizada", " Pérdida del apetito", "Fiebre", "Cansancio", "Malestar general"];
        this.diseases.push(new Disease("Varicela", "Es una infección viral altamente contagiosa que provoca un sarpullido similar a las ampollas en la piel y que da comezón.", "Erupción de bultos rojos o rosados", "Erupción de bultos rojos o rosados,", s7));

        var s8 = ["Fatiga", "Fiebre", "Rinitis y estornudos", "Dificultades respiratorias", " Hemorragias", "Ataque intenso de tos", "Episodios de ausencia de respiración", "Ojos llorosos", "Vómito"];
        this.diseases.push(new Disease("Tosferina", "Es una infección respiratoria altamente contagiosa, se caracteriza por ser una tos seca fuerte e incontrolable, seguida de unos sonidos agudos al inhalar, dificulta la respiración, además es altamente mortal en bebés, y tiene una gran probabilidad de causar daños cerebrales.", "Tos intensa con sonido agudo al inhalar",  s8));

        var s9 = ["Sangre en las heces", "Jaqueca", "Inapetencia", "Náusea", "Fiebre", "Calambres abdominales"];
        this.diseases.push(new Disease("Enfermedades transmitidas por alimentos(ETAS)", "Son incidentes (enfermedades) de dos personas o mas al consumir un mismo alimento", "Nauseas y dolores de estomago.", s9));

        var s10 = ["Inflamación en el estómago", "Anemia, Infecciones", "Anemia", "Conducto arterial persistente", "Afectación de los vasos sanguíneos del ojo"];
        this.diseases.push(new Disease("Bajo Peso al Nacer", "Cuando el bebé está por debajo de la curva de peso adecuado en la medida estándar, sin importar la edad gestacional.", "Peso menor a 2.499g",  s10));

        var s11 = ["Hipoxia", "Complicaciones en el cordón umbilical", "Trastornos digestivos"];
        this.diseases.push(new Disease("Mortalidad Perinatal", "Se refiere al fallecimiento del feto entre la semana 28 de gestación o entre los primeros 7 días de nacido.", "Complicaciones en la placenta", s11 ));

        var s12 = ["Fiebre", "Inflamación articular", "Agrandamiento del hígado y/o bazo", "Ceguera", "Opacidad de la córnea", "Dientes mellados y en forma de clavija", "Disminución en la audición o sordera"];
        this.diseases.push(new Disease("Sífilis congénita", "Es cuando el bebé nace con sífilis, la cual es una enfermedad de transmisión sexual. Se habilitó la compatibilidad con el lector de pantalla.", " Erupciones en las palmas de las manos y las plantas de los pies", s12));


        this.helpCenters(new HelpCenter("Ulpiano Lloreda","Puesto de Salud","3.441464","-76.488837", "Calle 72A Carrera 24 Esquina","438 3232 Ext. 6050"));
        this.helpCenters(new HelpCenter("Alfonso Bonilla Aragón","Puesto de Salud","3.423725","-76.483786", "Carrera 26U - Calle 76","4229748 - 4383232 Ext. 6040"));
        this.helpCenters(new HelpCenter("Ciudad Córdoba","Puesto de Salud","3.396112","-76.514274", "Carrera 50 - Calle 50 Esquina","328 3435 Ext. 4050"));
        this.helpCenters(new HelpCenter("El Poblado II","Puesto de Salud","3.422356","-76.488486", "Carrera 28-3 - Calle 72X Esquina","437 0038 - 437 2866 Ext. 5060"));
        this.helpCenters(new HelpCenter("Intervenidas","Puesto de Salud","3.420796","-76.478325", "Transversal 103 - Diagonal 26P-15 Esquina","423 0010 Ext. 8040"));
        this.helpCenters(new HelpCenter("el Vallado","Centro de Salud","3.406356","-76.502697", "Carrera 41B - Calle 51 Esquina","328 3435 Ext. 4001"));
        this.helpCenters(new HelpCenter("El Retiro","Puesto de Salud","3.410035 ","-76.500128", "Carrera 39B - Calle 49 Esquina","437 0031 - 420 5990 Ext. 2060 "));
        this.helpCenters(new HelpCenter("Decepaz","Centro de Salud","3.422619","-76.464024", "Cra. 26b #123-10","(5) 4201404"));
        this.helpCenters(new HelpCenter("Navarro","Puesto de Salud ","3.399914"," -76.466963", "Manuela Beltran, Cali","437 7777 Ext. 3060"));
        this.helpCenters(new HelpCenter("Ricardo Balcazar","Puesto de Salud ","3.434029","-76.492826", "Diagonal 71A Carrera 26H3 Esquina","438 3232 Ext. 6060"));
    }

    /* @author Nicolas Penagos
    *  Validates if a user is able to be added or not
    *  @param nickname is the unique name for each user
    *  @param age is the age of the user 
    *  @param sex is the sex given by the user 
    *  @return add returns true is the user is able to be added or false if not
    */
    validateUser( nickname, age, sex){

        var add = true;

        var id = this.usersMap.has(nickname);

        if(id){
            add = false;
        }

        if(!(age>=0 && age<100)){
            add = false;
        }

        if(nickname == " "&& nickname.length>5 && nickname.length<16){
            add = false;
        }

        return add;

    }

    /* @author Nicolas Penagos
    *  Add a registered family member to a registered family
    *  @param usernickname is the unique name for each user
    *  @param familyName unique name that serves as an identifier for each family
    */
    addRelative(userNickname, familyName){

        var user = this.searchUser(userNickname);
        var family = this.searchFamily(familyName);

        family.addRelative(user);

    }

    readFile(){
        var fs = require("fs");
        var text = fs.readFileSync("./myTxt.txt");
        var textByLine = text.split("\n")

        for(let i = 0; i<textByLine.length; i++){
            Console.log(textByLine[i]);
        }
    }

    /* @author Nicolas Penagos
    *  Searchs for a family by given family name
    *  @param familyName it is the unique name that represents each family
    *  @returns currentFamily returns an object family if it is in the array otherwise it returns null
    */
    searchFamily(familyName){

        var stop = false;
        var i = 0;
        var foundFamily;

        while(i<this.families.length&&!stop){

            var currentFamily = this.families[i];

            if(familyName == currentFamily.familyName){
                stop = true;
                foundFamily = currentFamily;
            }

            i++;

        }

        return foundFamily;
    }

    /* @author Nicolas Penagos
    *  Add an user to the array of users 
    *  @param nickname is the unique name for each user
    *  @param age is the age of the user 
    *  @param sex is the sex given by the user 
    */
    addUser( nickname, age, sex){

        if(this.validateUser( nickname, age, sex)){
            this.users.push(new User(this.idCounter, nickname, age, sex));
            this.usersMap.set(nickname, this.idCounter);
            this.idCounter++;
            console.log(this.users[0].nickname+" "+this.users[0].age );
 
        }
      

    }

    
    /* @author Nicolas Penagos
    *  Create and add a family given a unique family name
    *  @param familyName unique name that serves as an identifier for each family
    */
    addFamily(familyName){

        if(!this.familiesMap.has(familyName)){
            this.families.push(new Family(familyName, this.idFamily));
            this.familiesMap.set(familyName, this.idFamily);
            this.idFamily++;
        }

    }
      /* @author Daniel Martinez
    *  Create and add a HelpCenter
    *  @param HCname
    */
   addHelpCenter( HCname, def, address){
        this.helpCenters.push(new HelpCenter( HCname, def, 0,0,address));
        console.log(this.helpCenters[0].name+" "+this.helpCenters[0].definition );
    }

    /* @author Nicolas Penagos
    *  Search for a specific user in a user array given a nickname
    *  @param nickname it is the parameter given for the user to be searched
    *  @return currentUser returns the user object if it is in the array, otherwise it returns null
    */
    searchUser(nickname){
     
        var foundUser;
        var id = this.usersMap.get(nickname);
        var stop = false;

        for (let i = 0; i < this.users.length && !stop; i++) {

            var currentUser = this.users[i];

            if(id === currentUser.id){
                stop = true;
                foundUser=currentUser;
            }
        
            
        }

        return foundUser;
    }

        /* @author Daniel Martinez
    *  Search for a specific help Center in a helpCenter array given a name
    *  @param name it is the parameter given for the helpCenter to be searched
    *  @return currentHC returns the helpCenter object if it is in the array, otherwise it returns null
    */
    searchHelpCenter(name){
     
        var foundHC;
        var stop = false;
        var i = 0;
        while(i<this.helpCenters.length&&!stop){
            var currentHC = this.helpCenters[i];
            if(name == currentHC.name){
                stop = true;
                foundHC = currentHC;
            }
            i++;
        }
        return foundHC;
    }

    /* @author Daniel Rojas
    *  Add a attention path to the array of attentionpaths 
    *  @param helpCenter where the user should go
    *  @param diseases are the diseases that the help center manages
    */
    addAttentionpath(helpCenter,diseases){
        this.attentionpaths.push(new AttentionPath(helpCenter,diseases));
    }

    /* @author Daniel Rojas
    *  Search the attention paths for a specific disease.
    *  @param disease it is the parameter given for the user to be searched
    *  @return foundAP returns an array of attetion Path that handle the disease, otherwise it returns null
    */
    searchAttentionPath(disease){
        var foundAP=[];
        var length= 0;

        while(length<this.attentionpaths.length){
            var currentAP = this.attentionpaths[length];
            for(let i=0;i<currentAP.diseases.length; i++ ){
                if(disease == currentAP.diseases[i]){
                    foundAP.push(currentAP);
                }
            }
            length++;
        }

        if(foundAP.length==0){
            foundAP=null;
        }

        return foundAP;
    }

    test(){
       // this.family = new Family("firstFamily"); 
     //   this.family.addRelative(1, "nick",14, "male"); 
        //console.log(this.family.relatives[0].sex); 
        //console.log(this.family.familyName)

        this.addUser("nick",14, "male");
        this.addUser("jaime",14, "male");
        this.addUser("nicolas",14, "male");
        this.addUser("daniel",14, "male");

       
        //console.log(this.searchUser("nicolas").id);

        //console.log("*********************************");

        this.addFamily("Penagos");
        this.addFamily("Suarez");
        this.addFamily("Martinez");
       // console.log("searchFamily(Suarez): "+this.searchFamily("Suarez").familyName+" "+this.searchFamily("Suarez").id);
        //console.log(this.searchUser("nicolas").nickname+" xxxxx "+ this.searchFamily("Penagos").familyName);
        this.addRelative("nicolas", "Penagos");
        this.addRelative("nick","Penagos");
        
       // this.helpCenters.push(new HelpCenter("nuevo", "nose", 300, 700, "calle#3")); 
        //this.helpCenters.push(new HelpCenter("otro", "nose", 300, 700, "calle#3")); 
        
        this.addHelpCenter( "eoooooo", "idkBro", "3####"); 
        console.log(this.searchHelpCenter("eoooooo").name); 

        //console.log("*********************************");
        //console.log(this.searchFamily("Penagos").relatives[0].nickname);
        //console.log(this.searchFamily("Penagos").relatives[1].nickname);

        console.log("*********************************");

        var testDiseases1=["salmonella","malaria"];
        var testDiseases2=["sifilis Congenita","sifilis gestional"];
        var testDiseases3=["acciones de acogida","Prevención de la Xenofobia"];

        this.addAttentionpath("hospital 1",testDiseases1);
        this.addAttentionpath("ancur",testDiseases3);
        this.addAttentionpath("hospital 2", testDiseases2);
        this.addAttentionpath("hospital 3", testDiseases1);

        console.log(this.searchAttentionPath("salmonella"));

        this.readFile();

    }

      /* @author Wilson St Suarez
    *  Create the map and marker, also, set the position to the center of the map.
    *  @param 
    *  @return 
    */

    iniciarMap(){
        var coord = {lat:3.3416852 ,lng: -76.5298551};
        var map = new google.maps.Map(document.getElementById('map'),{
          zoom: 10,
          center: coord
        });
        
        var marker = new google.maps.Marker({
          position: coord,
          map: map
        });
    }


//This go in the style.css class, use it when the frontend team has the space for it inthe the proper screen
    /*
    #map {
        height: 800px;
        width: 100%;
    }
*/

}