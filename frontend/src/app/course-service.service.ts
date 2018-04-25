import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from "./course"

@Injectable()
export class CourseService {

  constructor(private http: HttpClient) { }

  getFreeCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/courses?id_teacher=0');
  }
  getCourseForTeacher(id_teacher: number): Observable<Course> {
    return this.http.get<Course>('http://localhost:3000/courses?id_teacher=' + id_teacher);
  }
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/courses');
  }
  getCourseById(id:number):Observable<Course>{
    return this.http.get<Course>('http://localhost:3000/courses?id_teacher='+id);
  }




}