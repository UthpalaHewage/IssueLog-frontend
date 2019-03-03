import { Component, OnInit, ViewChild } from "@angular/core";
import issueData from "../shared/Models/issueData";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { IssueService } from "../services/issue.service";

@Component({
  selector: "app-editissue",
  templateUrl: "./editissue.component.html",
  styleUrls: ["./editissue.component.css"]
})
export class EditissueComponent implements OnInit {
  issueInfo: issueData;
  selectedCriticalLevel: number;
  error = "";
  selectedStatus: number;

  editedIsse = {
    criticalLevel: "",
    deadLine: "",
    description: "",
    id: "",
    projectId: "",
    title: "",
    status: ""
  };

  @ViewChild("a") editIssueForm: NgForm;

  constructor(
    private router: Router,
    private issueService: IssueService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.issueService.getIssueById(params.id).subscribe(data => {
        this.issueInfo = <issueData>data;
        console.log(this.issueInfo);
        if (this.issueInfo.criticalLevel == "Not Critical") {
          this.selectedCriticalLevel = 0;
        } else {
          this.selectedCriticalLevel = 1;
        }
        // status
        if (this.issueInfo.status == "To be completed") {
          this.selectedStatus = 0;
        } else {
          this.selectedStatus = 1;
        }
      });
    });
  }

  onSubmit() {
    this.editedIsse.deadLine = this.editIssueForm.value.deadline;
    this.editedIsse.title = this.editIssueForm.value.issuetitle;
    this.editedIsse.description = this.editIssueForm.value.issuedescription;

    if (this.editIssueForm.value.criticallevel == "1") {
      this.editedIsse.criticalLevel = "true";
    } else {
      this.editedIsse.criticalLevel = "false";
    }

    // status
    if (this.editIssueForm.value.status == "1") {
      this.editedIsse.status = "true";
    } else {
      this.editedIsse.status = "false";
    }

    this.editedIsse.id = this.issueInfo.id.toString();
    this.editedIsse.projectId = this.issueInfo.projectId.toString();

    console.log(this.editedIsse);

    this.issueService
      .updateIssue(this.issueInfo.id, this.editedIsse)
      .subscribe(data => {
        if (data == 200) {
          this.router.navigate(["/issue", this.issueInfo.id]);
        } else {
          this.error = "Error Occured !!! Try Again...";
        }
      });
  }

  toGetCancel() {
    this.router.navigate(["/issue", this.issueInfo.id]);
  }
}
