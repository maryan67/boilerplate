import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-service.service';
import { User } from '../../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  status: string;

  private data: User[] = new Array(50);
  private index: number = 0;
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getHeroes().subscribe((res:User[]) => {
      
      this.data = res;
      
    });

    this.status = "Waiting for login";
  }

  onLogClick() {

    if (!(this.username && this.password))
      this.status = "Username or password is empty.";
    else {

      this.status = 'login unsucces';
      this.data.forEach(element =>{
        if ((this.username === element.userName) && (this.password === element.passWord)) {
          this.status = 'login success !';
        }


      });
        
        

      }
    }
  }

}
