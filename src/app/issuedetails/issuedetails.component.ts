import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { IssueService } from "../services/issue.service";
import issueDataList from "../shared/Models/issueDataList";

@Component({
  selector: "app-issuedetails",
  templateUrl: "./issuedetails.component.html",
  styleUrls: ["./issuedetails.component.css"]
})
export class IssuedetailsComponent implements OnInit {
  issueData: issueDataList;
  projectTitle: string = "";
  projectId: string = "";
  activeProjectButton: boolean = false;

  constructor(
    private router: Router,
    private issueService: IssueService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.projectTitle = params["projectName"];
    });

    this.activatedRoute.params.subscribe(params => {
      //initalize params.id
      this.projectId = params.id;

      this.issueService.getProjectIssueList(this.projectId).subscribe(data => {
        this.issueData = <issueDataList>data;
        console.log(this.issueData);
      });
    });

    var roleId = localStorage.getItem("userTypeId");
    console.log(roleId);
    if (roleId == "3") {
      console.log("came");
      this.activeProjectButton = true;
      console.log(this.activeProjectButton);
    }
  }

  goToIssue(issueId: number) {
    this.router.navigate(["/issue", issueId]);
  }

  addissue() {
    this.router.navigate(["/project/addissue", this.projectId]);
  }

  chart() {
    this.router.navigate(["/project/chart", this.projectId]);
  }
}
