import { Component, Input, EventEmitter, Output } from "@angular/core";
import { COURSES } from "src/db-data";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  @Input()
  course: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("card component - button clicked ...");

    this.courseSelected.emit(this.course);
  }
}
