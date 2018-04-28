import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user';
import { Course } from '../../course';
import { CourseService } from '../../course-service.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedUser: User;
  displayString: String;
  course: Course;
  executeCourseUpdate: boolean = true;
  constructor(private thisRoute: ActivatedRoute, private CourseService: CourseService) { }
  @ViewChild(HomeComponent) home: HomeComponent;
  ngOnInit() {
    this.thisRoute.queryParams.subscribe((user: User) => {

      this.loggedUser = user;
      this.home.loggedUser = user;

      if (this.loggedUser.isTeacher)
        this.CourseService.getCourseForTeacher(this.loggedUser.id).subscribe((res: Course) => {
           if (this.executeCourseUpdate) {
            this.course = res[0];
            this.home.course = res[0];
            this.home.getTeachedCurse();

            this.displayString = this.displayNameAndCourse();
            this.home.getFreeCourses();
            this.executeCourseUpdate = false;
           }
        });
    });

  }

  displayNameAndCourse(): string {
    let returnedString: string;


    if (this.loggedUser.isTeacher) {
      if (!(this.course === undefined)) {
        returnedString = "Logged in as " + this.loggedUser.name + " and you are teaching " + this.course.name;
      } else
        returnedString = "Logged in as " + this.loggedUser.name + " and you are teaching nothing at the moment";

    }
    else {
      returnedString = "Logged in as " + this.loggedUser.name;
    }
    return returnedString;
  }

}
