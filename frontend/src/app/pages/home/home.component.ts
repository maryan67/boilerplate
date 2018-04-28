import { Component, OnInit, Injectable, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user';
import { Course } from '../../course';
import { Entry } from '../../entry';
import { EntryService } from '../../entry-service.service';
import { CourseService } from '../../course-service.service';
import { UserService } from '../../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent implements OnInit {


  courses: Course[];
  course: Course;
  selectedCourse: Course;
  selectedTeacherCourse: Course;
  freeCourses: Course[] = [];
  entries: Entry[] =[];
  unatendedCourses: Course[] = [];
  teachers: User[] = [];
  isTeaching: boolean = true;
  loggedUser: User;
  teacherCourse: Course;
  courseOption: Course;
  entriesLoaded:boolean = false;
  constructor(private thisRoute: ActivatedRoute, private entryService: EntryService, private coursesService: CourseService,
    private UserService: UserService) {

  }
  data: User;

  ngOnInit() {


    console.log(this.loggedUser);

    this.UserService.getTeachers().subscribe((_teachers: User[]) => {
      this.teachers = _teachers;

    });

    this.coursesService.getCourses().subscribe((res: Course[]) => {
      res.forEach(element => {
        this.unatendedCourses.push(element);
      });
      this.courses = res;
    });

    this.entryService.getEntriesForStudent(this.loggedUser.id).subscribe((_entries: Entry[]) => {
      if (_entries.length > 0) {


        console.log(_entries);

        let unatCoursesAux: Course[] = [];
        this.unatendedCourses.forEach((element: Course) => {

          let isContained: boolean = false;
          _entries.forEach((entry: Entry) => {
            if (entry.id_course == element.id) {
              isContained = true;
            }
          });
          if (!isContained) {
            unatCoursesAux.push(element);
          }

        });
        
        this.entries = _entries;
        this.unatendedCourses = unatCoursesAux;
      }
      this.entriesLoaded = true;
    });


  }



  getFreeCourses() {
    this.coursesService.getFreeCourses().subscribe((_freeCourses: Course[]) => {
      this.freeCourses = _freeCourses;

    });
  }
  getTeachedCurse() {
    console.log(this.course);

    if (this.course === undefined)
      this.isTeaching = false;

  }
  onSelectCourseClick() {

    console.log(this.entries);
    
    console.log(this.freeCourses);
    if ((this.selectedCourse === undefined) || (this.teacherCourse === undefined)) {
      console.log("U selected nothing");
    }
    else {
      if (!(this.loggedUser.isTeacher)) {
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
      else {
        console.log(this.teacherCourse);

        this.teacherCourse.id_teacher = this.loggedUser.id;
        this.coursesService.updateCourse(this.teacherCourse).subscribe(res => {
          window.location.reload();

        });

      }
    }
  }

  diplayCourseName(entry: Entry): string {
    let returnString: string;
    this.courses.forEach(_course => {
      if (_course.id == entry.id_course)
        returnString = _course.name;
    });

    return returnString;


  }

  displayTeacherName(entry: Entry): string {
    let returnString: string;
    if (this.entriesLoaded) {
      this.courses.forEach(_course => {
        console.log(entry);

        if (entry.id_course == _course.id)
          this.teachers.forEach(_teacher => {
            if (_course.id_teacher == _teacher.id)
              returnString = _teacher.name;
          });
      });
    }
    return returnString;
  }

  getIsTeaching(): boolean {

    return this.isTeaching;
  }


}