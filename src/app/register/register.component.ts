import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UserService } from "../services/user.service";
import userDetails from "../shared/Models/userDetails";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  errorMsg = "";
  submitted = false;
  userD: userDetails;
  user = {
    fname: "",
    lName: "",
    email: "",
    password: "",
    userTypeId: ""
  };

  @ViewChild("f") registerForm: NgForm;

  constructor(private router: Router, private userServices: UserService) {}

  ngOnInit() {}

  // login() {
  //   this.router.navigate([""]);
  // }

  onSubmit() {
    this.submitted = true;

    this.user.fname = this.registerForm.value.fname;
    this.user.lName = this.registerForm.value.lName;
    this.user.email = this.registerForm.value.email;
    this.user.userTypeId = this.registerForm.value.userTypeId;
    this.user.password = this.registerForm.value.password;

    // console.log(JSON.stringify(this.user));

    this.userServices.registerNewUser(this.user).subscribe(
      data => {
        if (data.id) {
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
    // this.registerForm.reset();
  }
}
