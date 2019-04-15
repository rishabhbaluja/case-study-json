import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CoursesComponent } from "./components/courses/courses.component";
import { JsonComponent } from "./components/json/json.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "course", component: CoursesComponent },
  { path: "json", component: JsonComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
