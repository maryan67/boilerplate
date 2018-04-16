import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { User } from '../../user';
import { UserService } from '../../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  userName: string;
  passWord: string;


  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  onRegisterClick() {

    let user ={
    name:this.name,
    userName:this.userName,
    passWord:this.passWord,
    email:this.passWord,
    isTeacher:false
    };



    
    
    this.userService.createUser(user).subscribe(res =>{
      console.log(res);
    });

    this.userService.getHeroes().subscribe((res:User[]) => {
      
      console.log(res);
      
    });



  }




}


