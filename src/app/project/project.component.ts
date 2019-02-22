import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import projectDataList from '../shared/Models/projectDataList';
import projectData from '../shared/Models/projectData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectData: projectDataList;

  constructor(private projectService:ProjectService,private router: Router) { }

  ngOnInit() {
    var userId =localStorage.getItem("userId");
    // console.log(data);

    this.projectService.getUserProjectList(userId)
    .subscribe((data)=>{
      this.projectData=<projectDataList>data;
      console.log(this.projectData);
    })
  }

  goToissues(projectId:number,projectName:string){
   
     this.router.navigate(["/project",projectId],{ queryParams: { projectName:projectName  } });
  }

   addproject(){
    this.router.navigate(["/addproject"]);
  }
   

}
