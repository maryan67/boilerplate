import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

 
  constructor(private HttpClient: HttpClient) {

  }

  getHeroes(): Observable<User[]> {

    return this.HttpClient.get<User[]>( 'http://localhost:3000/users');

  }

  createUser(user): Observable<any> {
    
    const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    
    return this.HttpClient.post('http://localhost:3000/users',user,cudOptions);
  }

}
