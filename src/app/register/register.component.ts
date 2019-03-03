import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UserService } from "../services/user.service";
import userDetails from "../shared/Models/userDetails";
import userTypes from "../shared/Models/userTypes";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  errorMsg = "";
  submitted = false;
  userD: userDetails;
  userRoles: Array<userTypes>;
  user = {
    fname: "",
    lName: "",
    email: "",
    password: "",
    userTypeId: ""
  };

  @ViewChild("f") registerForm: NgForm;

  constructor(private router: Router, private userServices: UserService) {}

  ngOnInit() {
    this.userServices.getUserRoles().subscribe(data => {
      this.userRoles = <userTypes[]>data;
      console.log(this.userRoles);
      console.log(this.userRoles.length);
    });
  }

  onSubmit() {
    this.submitted = true;

    this.user.fname = this.registerForm.value.fname;
    this.user.lName = this.registerForm.value.lName;
    this.user.email = this.registerForm.value.email;
    this.user.userTypeId = this.registerForm.value.userTypeId;
    this.user.password = this.registerForm.value.password;

    console.log(this.user);

    this.userServices.registerNewUser(this.user).subscribe(
      data => {
        if (data) {
          console.log(data);
          this.registerForm.reset();
          this.router.navigate([""]);
        }
      },
      error => {
        this.errorMsg = "Server Error.. Try Again !!!";
        this.registerForm.reset();
      }
    );
  }
}
