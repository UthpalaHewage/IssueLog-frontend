import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../services/project.service";
import projectDataList from "../shared/Models/projectDataList";
import projectData from "../shared/Models/projectData";
import { Router } from "@angular/router";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"]
})
export class ProjectComponent implements OnInit {
  projectData: projectDataList;
  activeProjectButton: boolean = true;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    var userId = localStorage.getItem("userId");

    this.projectService.getUserProjectList(userId).subscribe(data => {
      this.projectData = <projectDataList>data;
      console.log(this.projectData);
    });
    var roleId = localStorage.getItem("userTypeId");
    console.log(roleId);
    if (roleId == "3") {
      console.log("came");
      this.activeProjectButton = false;
      console.log(this.activeProjectButton);
    }
  }

  goToissues(projectId: number, projectName: string) {
    this.router.navigate(["/project", projectId], {
      queryParams: { projectName: projectName }
    });
  }

  addproject() {
    this.router.navigate(["/addproject"]);
  }
}
