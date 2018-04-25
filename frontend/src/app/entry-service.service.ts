import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Entry } from './entry'
import { Observable } from 'rxjs';

@Injectable()
export class EntryService {

  constructor(private http: HttpClient) { }

  addEntry(entry: Entry): Observable<any> {
    const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.post('http://localhost:3000/entries', entry, cudOptions);
  }

  getEntriesForStudent(id_student:number):Observable<Entry[]>{
    return this.http.get<Entry[]>('http://localhost:3000/entries?id_student='+id_student);
  }

}