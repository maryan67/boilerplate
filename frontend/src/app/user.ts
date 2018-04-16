export class User {

     

    constructor(public id:number = 0 ,public name:string = '', public email:string ='', public isTeacher = false, public userName:string ='',public passWord:string ='') {
        
        this.id = id;
        this.name = name;
        this.email = email;
        this.isTeacher = isTeacher;
        this.userName = userName;
        this.passWord = passWord;
    }

    
}