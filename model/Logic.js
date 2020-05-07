class Logic{

    constructor(){

        this.user = [];
        this.diseases = [];
        this.families = [];
        this.users = [];
        this.attentionpaths = [];
        this.helpCenters = [];
        this.usersMap = new Map();
        this.familiesMap = new Map();
        this.idCounter = 1000;
        this.idFamily = 1;

    }

    logIn(){
        
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

    test(){
       // this.family = new Family("firstFamily"); 
     //   this.family.addRelative(1, "nick",14, "male"); 
        //console.log(this.family.relatives[0].sex); 
        //console.log(this.family.familyName)

        this.addUser("nick",14, "male");
        this.addUser("jaime",14, "male");
        this.addUser("nicolas",14, "male");
        this.addUser("daniel",14, "male");

       
        console.log(this.searchUser("nicolas").id);

        console.log("*********************************");

        this.addFamily("Penagos");
        this.addFamily("Suarez");
        this.addFamily("Martinez");
       // console.log("searchFamily(Suarez): "+this.searchFamily("Suarez").familyName+" "+this.searchFamily("Suarez").id);
        console.log(this.searchUser("nicolas").nickname+" xxxxx "+ this.searchFamily("Penagos").familyName);
        this.addRelative("nicolas", "Penagos");
        this.addRelative("nick","Penagos");

        
        

        console.log("*********************************");
        console.log(this.searchFamily("Penagos").relatives[0].nickname);
        console.log(this.searchFamily("Penagos").relatives[1].nickname);


    }


}