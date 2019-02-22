import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IssueService } from '../services/issue.service';
import issueDataList from '../shared/Models/issueDataList';

@Component({
  selector: 'app-issuedetails',
  templateUrl: './issuedetails.component.html',
  styleUrls: ['./issuedetails.component.css']
})
export class IssuedetailsComponent implements OnInit {

  issueData:issueDataList;
  projectTitle:string="";
  projectId:string=""

  constructor(private router: Router,private issueService:IssueService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.projectTitle = params['projectName'];
       // Print the parameter to the console. 
  });

  this.activatedRoute.params.subscribe( params => {
    //initalize params.id
    this.projectId = params.id
    
    this.issueService.getProjectIssueList(this.projectId).subscribe(
      data=>{
         this.issueData = <issueDataList>data;
        console.log(this.issueData)
      }
    );
  });
  }

  goToIssue(issueId:number){
    this.router.navigate(["/issue",issueId]);
  }

  addissue(){
    this.router.navigate(["/project/addissue",this.projectId]);
  }




}
