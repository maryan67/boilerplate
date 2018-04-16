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

  // post(reqInfo: RequestInfo) {

  //   let receivedUser = reqInfo.utils.getJsonBody(reqInfo);
    
  //   this.users.push(receivedUser);
  //   const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
  //   reqInfo.utils.createResponse$(() => {

  //     let respOpt: ResponseOptions = new ResponseOptions({
  //       status: 200,
  //       body: 'da'
  //     });
  //     return respOpt;

  //   });




  // }
}
