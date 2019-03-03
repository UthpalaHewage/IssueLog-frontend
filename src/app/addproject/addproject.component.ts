import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ProjectService } from "../services/project.service";
import projectData from "../shared/Models/projectData";
import userDetails from "../shared/Models/userDetails";
import userList from "../shared/Models/userList";

@Component({
  selector: "app-addproject",
  templateUrl: "./addproject.component.html",
  styleUrls: ["./addproject.component.css"]
})
export class AddprojectComponent implements OnInit {
  errorMsg = "";
  submitted = false;
  projectD: projectData;
  project = {
    name: "",
    description: "",
    clientId: "",
    projectManagerId: "",
    projectLeaderId: ""
  };
  usersPM = [];
  usersCl = [];
  usersPL = [];

  @ViewChild("p") projectForm: NgForm;

  constructor(
    private router: Router,
    private projectServices: ProjectService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {});

    this.projectServices.getPromangrList().subscribe(data => {
      this.usersPM = <userList[]>data;
      console.log(this.usersPM);
      console.log(this.usersPM.length);
    });

    this.projectServices.getProleaderList().subscribe(data => {
      this.usersPL = <userList[]>data;
      console.log(this.usersPL);
      console.log(this.usersPL.length);
    });

    this.projectServices.getClientList().subscribe(data => {
      this.usersCl = <userList[]>data;
      console.log(this.usersCl);
      console.log(this.usersCl.length);
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

    this.projectServices.addNewProject(this.project).subscribe(
      projectinfo => {
        if (projectinfo.id) {
          console.log(projectinfo);
          this.projectForm.reset();
          this.router.navigate(["/project"]);
        }
      },
      error => {
        this.errorMsg = "Server Error.. Try Again !!!";
        this.projectForm.reset();
      }
    );
  }
}
