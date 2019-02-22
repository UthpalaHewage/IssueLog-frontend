import { Component, OnInit } from '@angular/core';
import { IssueService } from '../services/issue.service';
import { Router, ActivatedRoute } from '@angular/router';
import issueData from '../shared/Models/issueData';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  issueInfo:issueData;

  constructor(private router: Router,private issueService:IssueService,private activatedRoute: ActivatedRoute) { }
  
  
  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.issueService.getIssueById(params.id).subscribe(
        data=>{
         
          this.issueInfo = <issueData>data
        
        }
      );
    });
  }

}
