class Logic{

    constructor(){

        this.user = [];
        this.diseases = [];
        this.families = [];
        this.users = [];
        this.attentionpaths = [];
        this.helpCenters = [];

    }

    logIn(){
        this.login = new LoginFrontEnd();
        this.login.myFunction();
    }

    test(){
        this.family = new Family("firstFamily"); 
        this.family.addRelative(1, "nick",14, "male"); 
        console.log(this.family.relatives[0].sex); 
        console.log(this.family.familyName)
    }


}