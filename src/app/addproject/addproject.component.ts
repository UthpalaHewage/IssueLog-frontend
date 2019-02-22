import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ProjectService } from "../services/project.service";
import projectData from "../shared/Models/projectData";

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  errorMsg = "";
  submitted = false;
  projectD: projectData;
  project = {
    name:"",
    description:"",
    clientId:"",
    projectManagerId:"",
    projectLeaderId:""

  };

  

  @ViewChild("p") projectForm: NgForm;

  constructor(private router: Router, private projectServices: ProjectService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      //initalize params.id
      // this.project.clientId = params.id;
      // this.project.projectManagerId = params.id;
      // this.project.projectManagerId = params.id;
      
      });
  }

  onSubmit() {
    this.submitted = true;

    this.project.name = this.projectForm.value.projectname;
    this.project.description = this.projectForm.value.projectdescription;
    this.project.clientId = this.projectForm.value.client;
    this.project.projectManagerId = this.projectForm.value.projectmanager;
    this.project.projectLeaderId = this.projectForm.value.projectleader;
    
   
  
    console.log(this.project);
    
    // console.log(JSON.stringify(this.project));

    this.projectServices.addNewProject(this.project).subscribe(
      projectinfo => {
        if (projectinfo.id) {
          console.log(projectinfo);
          // console.log(this.project.projectId)
          this.projectForm.reset();
          // console.log(this.project.projectId)
          // this.router.navigate(['"/issue",this.issue.projectId']);
          this.router.navigate(["/project"]);
          // this.router.navigate(["/project",this.project.projectId]);
        }
      },
      error => {
        this.errorMsg = "Server Error.. Try Again !!!";
        this.projectForm.reset();
      }
    );
  
    // this.issueForm.reset();
  }
}