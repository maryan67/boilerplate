import { InMemoryDbService , RequestInfo} from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable()
export class AppInMemoryUserModule implements InMemoryDbService {
  createDb(reqInfo : RequestInfo):{} | Promise<{}> {
    let hero = [
      { id: 1, name: 'Marian Secarea', email :'msecarea@gmail.com' ,isTeacher:false, userName:'test',passWord:'test'}
    ];
    return { hero };
  }
}
