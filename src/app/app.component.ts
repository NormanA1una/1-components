import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = COURSES;

  /*   startDate = new Date(2000, 1, 27);

  price = 9.99465486585;

  rate = 0.67; */

  onCourseSelected(course: Course) {
    console.log("app component - button clicked ...", course);
  }
}
