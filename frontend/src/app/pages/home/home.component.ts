import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isProf: boolean;
  courses: string[];

  constructor() { }

  ngOnInit() {

    this.isProf= false;

    this.courses= ["course1", "course2", "course3"];
  }

}
