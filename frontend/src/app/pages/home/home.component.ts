import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user';
import { Course } from '../../course';
import { Entry } from '../../entry';
import { EntryService } from '../../entry-service.service';
import { CourseService } from '../../course-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent implements OnInit {

  courses: string[];
  loggedUser: User;
  selectedCourse: Course;
  freeCourses: Course[] = [];
  entries: Entry[];
  unatendedCourses: Course[] = [];


  constructor(private thisRoute: ActivatedRoute, private entryService: EntryService, private coursesService: CourseService) {




  }

  ngOnInit() {
    this.thisRoute.queryParams.subscribe((user: User) => {
      this.loggedUser = user;
    });

    this.coursesService.getCourses().subscribe((res: Course[]) => {
      res.forEach(element => {
        this.unatendedCourses.push(element);
      });
    });

    this.entryService.getEntriesForStudent(this.loggedUser.id).subscribe((_entries: Entry[]) => {
      if (_entries.length > 0) {


        let index: number = 0;
        this.unatendedCourses.forEach((element: Course) => {

          _entries.forEach((entry: Entry) => {
            if (entry.id_course == element.id) {
              this.unatendedCourses.splice(index, 1);
              index--;
            }
          });
          index++;
        });
      }
      this.entries = _entries;
    });
  }

  onSelectCourseClick() {
    if (!(this.selectedCourse === null) || (this.selectedCourse === undefined)) {
      let _entry = {
        id_course: this.selectedCourse.id,
        id_student: this.loggedUser.id,
        grade: 0

      };
      this.entryService.addEntry(_entry).subscribe(res => {
          window.location.reload();
      });

    }
  }

}