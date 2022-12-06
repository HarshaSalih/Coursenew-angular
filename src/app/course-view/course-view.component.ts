import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent {

  constructor(private api:ApiService){
    api.fetchCourses().subscribe(
      (response)=>
      {
        this.course=response;
      }
    )
  }
  course:any=[]

}
