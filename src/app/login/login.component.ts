import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthServices } from "../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  buttonEnableStatus: boolean = false;
  constructor(private authService: AuthServices, private router: Router) {}
  userName = "";
  password = "";
  errorMsg = "";
  ngOnInit() {}

  EnableLoginButton() {
    if (this.userName !== "" && this.password !== "") {
      this.buttonEnableStatus = true;
    } else {
      this.buttonEnableStatus = false;
    }
  }
  login() {
    this.errorMsg = "";
    this.authService.authenticateUser(this.userName, this.password).subscribe(
      data => {
        if (data.id) {
          this.router.navigate(["/project"]);
        }
      },
      error => {
        this.errorMsg = "Invalid Credentials...!";
        this.password = "";
      }
    );
  }
}
