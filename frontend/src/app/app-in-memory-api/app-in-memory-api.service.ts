import { InMemoryDbService , RequestInfo} from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable()
export class AppInMemoryApiModule implements InMemoryDbService {
  createDb(reqInfo : RequestInfo):{} | Promise<{}> {
    let hero = [
      { id: 1, name: 'Windstorm' }
    ];
    return { hero };
  }
}
