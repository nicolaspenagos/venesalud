class Family{

    constructor(familyName){
        this.familyName = familyName; 
        this.isFamily; 
        this.relatives = []; 
    }
    addRelative(id, nickname, age, sex){
        this.relatives.push(new User(id, nickname, age, sex) ); 
        console.log("AddUserTest")
    }
    removeRelative(id){
        this.relatives.pop(1,id); 
    }
}