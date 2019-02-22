import { Component, OnInit, ViewChild } from '@angular/core';
import { Router , ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { IssueService } from "../services/issue.service";
import issueData from "../shared/Models/issueData";

@Component({
  selector: 'app-addissue',
  templateUrl: './addissue.component.html',
  styleUrls: ['./addissue.component.css']
})

export class AddissueComponent implements OnInit {

  errorMsg = "";
  submitted = false;
  issueD: issueData;

  // criticalLevel: [];
  // projectId: string="";
  issue = {
    title:"",
    description:"",
    criticalLevel:"",
    deadLine:"",
    projectId:""
    //file attached
  };
//  if(criticalLevel==1){
//    return "Critical"
//  }
//  else{
//    return "Not Critical"
//  }
  @ViewChild("a") issueForm: NgForm;



  constructor(private router: Router, private issueServices: IssueService, private activateRoute : ActivatedRoute) { }

  ngOnInit() {
  this.activateRoute.params.subscribe( params => {
    //initalize params.id
    this.issue.projectId = params.id
    
    });
  // this.issue.criticalLevel = [
  //   {"value":1,"item":"Critical"},
  //   {"value":2,"item":"Not Critical"}
  // ];

 }
 

    onSubmit() {
      this.submitted = true;
  
      this.issue.title = this.issueForm.value.issuetitle;
      this.issue.description = this.issueForm.value.issuedescription;
      this.issue.criticalLevel = this.issueForm.value.criticallevel;
      this.issue.deadLine = this.issueForm.value.deadline;
      //this.issue.projectId = this.issueForm.value.projectId;
      
      //file attached
     
    //  console.log(this.issueForm.value.deadline);
      
     console.log(this.issue);
      // console.log(JSON.stringify(this.issue));
     
     
      if(this.issueForm.value.criticallevel=="1"){
        this.issue.criticalLevel = "true"
      }
      else{
        this.issue.criticalLevel = "false"
      }

      this.issueServices.addNewIssue(this.issue).subscribe(
        issueinfo => {
          if (issueinfo.id) {
            console.log(issueinfo);
            console.log(this.issue.projectId);
            this.issueForm.reset();
            console.log(this.issue.projectId);
            this.router.navigate(["/project",this.issue.projectId]);

            // this.router.navigate(['"/issue",this.issue.projectId']);
            // this.router.navigate(["/project"]);
          }
        },
        error => {
          this.errorMsg = "Server Error.. Try Again !!!";
          this.issueForm.reset();
        }
      );
    
      // this.issueForm.reset();
    }
  }
  


  
      