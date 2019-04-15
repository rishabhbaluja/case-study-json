import { Component, OnInit } from "@angular/core";
import { CourseDetail } from "src/app/model/course-detail";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class CoursesComponent implements OnInit {
  courseArray: CourseDetail[] = [];
  courseDuration1=undefined;
  invalidName: boolean = false;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.getCourse();
  }

  getCourse() {
    this.courseService
      .getCourseDetail()
      .subscribe(data => (this.courseArray = data));
  }

  addCourse(course) {
    console.log(course.value);
    this.courseService.createCourse(course.value).subscribe(data => {
      alert("Course has been added successfully!! ");
      this.getCourse();
    });

  }


  getDuration(courseName) {
    this.invalidName = false;
    this.courseDuration1 = undefined;

    for (let course of this.courseArray) {
      if (course.courseName == courseName.value.name) {
        this.courseDuration1 = course.courseDuration;
        console.log(this.courseDuration1)
      }
    }
    if (this.courseDuration1 == undefined) {
      this.invalidName = true;
    }
  }
}
