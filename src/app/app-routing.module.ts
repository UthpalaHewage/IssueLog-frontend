import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { IssuedetailsComponent } from './issuedetails/issuedetails.component';
import { IssueComponent } from './issue/issue.component';
import { RegisterComponent } from './register/register.component';
import { AddissueComponent } from './addissue/addissue.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {path: "", component: LoginComponent },
  {path:"register",component: RegisterComponent},
  {path:"project",component:ProjectComponent},
  {path:"project/:id",component:IssuedetailsComponent},
  {path:"issue/:id",component:IssueComponent},
  {path:"project/addissue/:id",component:AddissueComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"addproject",component:AddprojectComponent},
  {path:"project/chart/:id",component:ChartComponent}
  
  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule {}
