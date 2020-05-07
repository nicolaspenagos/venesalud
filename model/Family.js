class Family{

    constructor(familyName, id){
        this.familyName = familyName; 
        this.isFamily; 
        this.relatives = []; 
        this.id=id;
    }
    addRelative(user){
        this.relatives.push(user); 
        console.log("AddUserTest")
        console.log(this.relatives.length+ " "+this.familyName+ " "+user.nickname);
        
    }
    removeRelative(id){
        this.relatives.pop(1,id); 
    }
}