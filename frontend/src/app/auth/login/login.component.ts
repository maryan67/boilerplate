import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-service.service';
import { Hero } from '../../hero';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  status: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getHeroes().subscribe((res: Hero) => console.log(res));
    this.status= "";
  }

  onLogClick() {

    if (this.username && this.password)
      this.status= "Placeholder: everything is ok."
    else
    this.status= "Username or password is empty."
  }

}
