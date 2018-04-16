import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { User } from '../../user';
import { UserService } from '../../user-service.service';
import { Router } from '@angular/router';

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
  isTeacher:boolean;


  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {

  }

  onRegisterClick() {

    let user ={
    name:this.name,
    userName:this.userName,
    passWord:this.passWord,
    email:this.passWord,
    isTeacher:this.isTeacher
    };



    
    
    this.userService.createUser(user).subscribe(res =>{
      this.router.navigate(['/pages/home'], { queryParams:res });
    });

    



  }




}


