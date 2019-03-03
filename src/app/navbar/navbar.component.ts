import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
//import userDetails from '../shared/Models/userDetails'

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  user: Object = {
    name: "Uthpala Hewage"
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  home() {
    this.router.navigate(["/project"]);
  }

  logout() {
    this.router.navigate([""]);
  }
}
