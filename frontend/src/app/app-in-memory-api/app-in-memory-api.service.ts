import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { ResponseOptions, Headers } from '@angular/http';


@Injectable()
export class AppInMemoryUserModule implements InMemoryDbService {
  
  createDb(reqInfo: RequestInfo): {} | Promise<{}> {
    let users = [
      { id: 1, name: 'Marian Secarea', email: 'msecarea@gmail.com', isTeacher: false, userName: 'test', passWord: 'test' }
    ];

   
    return { users };
  }

}
