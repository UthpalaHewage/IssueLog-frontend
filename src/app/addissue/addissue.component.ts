import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { IssueService } from "../services/issue.service";
import issueData from "../shared/Models/issueData";

@Component({
  selector: "app-addissue",
  templateUrl: "./addissue.component.html",
  styleUrls: ["./addissue.component.css"]
})
export class AddissueComponent implements OnInit {
  errorMsg = "";
  submitted = false;
  issueD: issueData;

  issue = {
    title: "",
    description: "",
    criticalLevel: "",
    deadLine: "",
    projectId: "",
    status: ""
  };

  @ViewChild("a") issueForm: NgForm;

  constructor(
    private router: Router,
    private issueServices: IssueService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.issue.projectId = params.id;
    });
  }

  onSubmit() {
    this.submitted = true;

    this.issue.title = this.issueForm.value.issuetitle;
    this.issue.description = this.issueForm.value.issuedescription;
    this.issue.criticalLevel = this.issueForm.value.criticallevel;
    this.issue.deadLine = this.issueForm.value.deadline;
    this.issue.status = this.issueForm.value.status;

    console.log(this.issue);

    if (this.issueForm.value.criticallevel == "1") {
      this.issue.criticalLevel = "true";
    } else {
      this.issue.criticalLevel = "false";
    }

    //status
    if (this.issueForm.value.status == "1") {
      this.issue.status = "true";
    } else {
      this.issue.status = "false";
    }

    this.issueServices.addNewIssue(this.issue).subscribe(
      issueinfo => {
        if (issueinfo.id) {
          console.log(issueinfo);
          console.log(this.issue.projectId);
          this.issueForm.reset();
          console.log(this.issue.projectId);
          this.router.navigate(["/project", this.issue.projectId]);
        }
      },
      error => {
        this.errorMsg = "Server Error.. Try Again !!!";
        this.issueForm.reset();
      }
    );
  }
}
