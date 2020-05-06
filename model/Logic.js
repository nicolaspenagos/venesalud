class Logic{

    constructor(){

        this.user = [];
        this.diseases = [];
        this.families = [];
        this.users = [];
        this.attentionpaths = [];
        this.helpCenters = [];
        this.usersMap = new Map();
        this.idCounter = 1;

    }

    logIn(){
        
    }

    validateUser( nickname, age, sex){

        var add = true;

        var id = this.usersMap.has(nickname);

        if(id){
            add = false;
        }

        if(!(age>=0 && age<100)){
            add = false;
        }

        if(nickname == " "){
            add = false;
        }

        return add;

    }

    addUser( nickname, age, sex){

        if(this.validateUser( nickname, age, sex)){
            this.users.push(new User(this.id, nickname, age, sex));
            this.usersMap.set(nickname, this.id);
            this.idCounter++;
            console.log(this.users[0].nickname+" "+this.users[0].age );
 
        }
      

    }

    searcUser(nickname){

        var currentUser;
        var stop = false;

        for (let i = 0; i < this.users.length && !stop; i++) {

            currentUser = users[i];

            if(id === currentUser.id){
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
        this.addUser("nick",14, "male");
        console.log(this.users.length);
    }


}