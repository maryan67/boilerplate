import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Hero } from './hero';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private HttpClient: HttpClient) {

  }

  getHeroes():Observable<Hero>{

     return this.HttpClient.get<Hero>('/api/heroes');

  }

}
