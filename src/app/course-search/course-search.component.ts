import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent {

  constructor(private api:ApiService){}

  courseTitle=""
  searchData:any=[]

  readValues=()=>
  {
    let data={
      "courseTitle":this.courseTitle
  }
  console.log(data)
  this.api.searchCourse(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.length==0) {
        alert("Invalid course title")
        
      } else {
        this.searchData=response
        
      }
    }
  )
  }

}
