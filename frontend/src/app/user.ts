export class User {

     

    constructor(public id = 0 ,public name:string = '', public email:string ='', public isTeacher = false, public userName:string ='',public passWord:string ='') {
        
        this.name = name;
        this.email = email;
        this.isTeacher = isTeacher;
        this.userName = userName;
        this.passWord = passWord;
    }
    clone(){
        return new User(this.id,this.name = name,
        this.email  ,
        this.isTeacher ,
        this.userName,
        this.passWord );
    }
    
}