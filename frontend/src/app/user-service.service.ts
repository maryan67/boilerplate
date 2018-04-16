import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private HttpClient: HttpClient) {

  }

  getHeroes(): Observable<User[]> {

    return this.HttpClient.get<User[]>('api/hero');

  }

}
