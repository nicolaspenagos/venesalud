class User{
    constructor(id, nickname, age, sex){

        this.id=id;
        this.nickname=nickname;
        this.age=age; 
        this.sex=sex;
    }

    getId(){
        return this.id; 
    }
    getNickname(){
        return this.nickname; 
    }
    getAge(){
        return this.age; 
    }
    getSex(){
        return this.sex; 
    }
}