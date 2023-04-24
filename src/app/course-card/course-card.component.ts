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

  @Input()
  cardIndex: number;

  @Output("courseSelected")
  courseEmitted = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("card component - button clicked ...");

    this.courseEmitted.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onClass() {
    if (this.course.category === "BEGINNER") {
      return "beginner";
    }

    if (this.course.category === "ADVANCED") {
      return "advanced";
    }

    if (this.course.category === "INTERMEDIATE") {
      return "intermediate";
    }
  }

  cardStyles() {
    if (this.course.category === "BEGINNER") {
      return { color: "crimson" };
    }

    if (this.course.category === "ADVANCED") {
      return { color: "blue" };
    }

    if (this.course.category === "INTERMEDIATE") {
      return { color: "green" };
    }
  }
}
