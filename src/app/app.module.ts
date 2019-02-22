import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectComponent } from './project/project.component';
import { HttpClientModule } from '@angular/common/http';
import { IssuedetailsComponent } from './issuedetails/issuedetails.component';
import { IssueComponent } from './issue/issue.component';
import { RegisterComponent } from './register/register.component';
import { AddissueComponent } from './addissue/addissue.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddprojectComponent } from './addproject/addproject.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectComponent,
    IssuedetailsComponent,
    IssueComponent,
    RegisterComponent,
    AddissueComponent,
    NavbarComponent,
    AddprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
