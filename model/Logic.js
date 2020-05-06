class Logic{

    constructor(){

        this.user = [];
        this.diseases = [];
        this.families = [];
        this.users = [];
        this.attentionpaths = [];
        this.helpCenters = [];
        this.usersMap = new Map();
        this.idCounter = 1000;

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

    searcUser(nickname){

        var currentUser;
        var id = this.usersMap.get(nickname);
        var stop = false;

        for (let i = 0; i < this.users.length && !stop; i++) {

            currentUser = this.users[i];

            if(id == currentUser.id){
                stop = true;
            }
        
            
        }

        return currentUser;
    }

    test(){
        this.family = new Family("firstFamily"); 
        this.family.addRelative(1, "nick",14, "male"); 
        console.log(this.family.relatives[0].sex); 
        console.log(this.family.familyName)

        this.addUser("nick",14, "male");
        this.addUser("jaime",14, "male");
        this.addUser("nicolas",14, "male");
        this.addUser("daniel",14, "male");
        console.log(this.searcUser("nicolas").id);
    }


}