import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { JsonComponent } from "./components/json/json.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [AppComponent, JsonComponent, CoursesComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
