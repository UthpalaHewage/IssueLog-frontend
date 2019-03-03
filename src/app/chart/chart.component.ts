import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { IssueService } from "../services/issue.service";

import issueData from "../shared/Models/issueData";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  projectId: string = "";
  issueData: Array<issueData>;

  completedCount: number = 0;
  toBeCompletedCount: number = 0;
  showChart: boolean = false;

  constructor(
    private router: Router,
    private issueService: IssueService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.projectId = params.id;
      console.log(this.projectId);

      this.issueService.getProjectIssueList(this.projectId).subscribe(data => {
        this.issueData = <issueData[]>data;

        for (var issue of this.issueData) {
          if (issue.status == "Completed") {
            this.completedCount++;
          } else {
            this.toBeCompletedCount++;
          }
        }
        this.showChart = true;
      });
    });
  }

  // Pie
  public pieChartLabels: string[] = ["Completed", "To be completed"];
  public pieChartType: string = "pie";

  // colors
  public pieChartColor: Array<any> = [
    { backgroundColor: ["#008000", "#FF0000"] },
    { borderColor: ["#AEEBF2", "#FEFFC9"] }
    //colors changed
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
