import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { ResponseOptions, Headers } from '@angular/http';
import { Header } from '@clr/angular';

@Injectable()
export class AppInMemoryUserModule implements InMemoryDbService {
  users = [
    { id: 1, name: 'Marian Secarea', email: 'msecarea@gmail.com', isTeacher: false, userName: 'test', passWord: 'test' }
  ];

  createDb(reqInfo: RequestInfo): {} | Promise<{}> {

    let usrs = this.users;
    return { usrs };
  }

  post(reqInfo: RequestInfo) {

    const receivedUser: User = <User>reqInfo.utils.getJsonBody(reqInfo);
    this.users.push(receivedUser);
    const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
    reqInfo.utils.createResponse$(() => {

      let respOpt: ResponseOptions = new ResponseOptions({
        status: 200,
        body: 'da'
      });
      return respOpt;

    });




  }
}
