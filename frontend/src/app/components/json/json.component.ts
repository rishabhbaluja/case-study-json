import { Component, OnInit } from "@angular/core";
import { CourseService } from "src/app/services/course.service";
import { CourseDetail } from "src/app/model/course-detail";

@Component({
  selector: "app-json",
  templateUrl: "./json.component.html",
  styleUrls: ["./json.component.css"]
})
export class JsonComponent implements OnInit {
  course: CourseDetail[] = [];
  constructor(private courseservice: CourseService) {}

  ngOnInit() {
    this.courseservice.getCourseDetail().subscribe(data => (this.course = data));
  }
}
