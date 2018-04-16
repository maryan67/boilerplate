import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedUser: string;
  constructor(private thisRoute:ActivatedRoute) { }

  ngOnInit() {
    this.thisRoute.queryParams.subscribe((user:User) => {
     
      this.loggedUser= JSON.stringify( user.name);
   });
  }

}
