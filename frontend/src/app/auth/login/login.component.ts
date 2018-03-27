import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-service.service';
import { Hero } from '../../hero';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getHeroes().subscribe((res :Hero) => console.log(res));

  }

}
