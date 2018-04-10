import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {

  constructor(private http:HttpClient) {

  }

  getHeroes():Observable<Hero>{
     return this.http.get<Hero>('api/hero');
  }

}
