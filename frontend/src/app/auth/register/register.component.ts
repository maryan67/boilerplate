import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor() { }

  ngOnInit() {
    this.onRegisterClick();
  }

  onRegisterClick(){
    console.log("Clickity CLICK!");
    if(this.model.userName){
      console.log("Working")
    }else{
      console.log("Empty")
    }

  }

}


