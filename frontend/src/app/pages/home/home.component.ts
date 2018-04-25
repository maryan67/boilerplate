import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: string[];
  loggedUser: User;

  constructor(private thisRoute:ActivatedRoute) { 
  }
  
  ngOnInit() {
    
    
    this.thisRoute.queryParams.subscribe((user:User) => {
     
      this.loggedUser= user;

    });


    console.log("Prof= " + this.loggedUser.isTeacher + " Nume " + this.loggedUser.name);

    this.courses= ["course1", "course2", "course3"];
    
  }

}
