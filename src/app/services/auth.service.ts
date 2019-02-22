import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/internal/operators/map";

@Injectable({
  providedIn: "root"
})
export class AuthServices {
  private loggedIn: boolean;
  private loggedUserId: string;
  private loggedUserName: string;

  constructor(private http: HttpClient) {}

  authenticateUser(username: string, password: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http
      .post<any>(
        environment.baseUrl + "/api/Login",
        JSON.stringify({ username, password }),
        { headers }
      )
      .pipe(
        map(res => {
          if (res.id) {
            localStorage.setItem("userId", JSON.stringify(res.id));
            localStorage.setItem(
              "userName",
              JSON.stringify(res.fname + res.lName)
            );
            localStorage.setItem("userTypeId", JSON.stringify(res.userTypeId));
            localStorage.setItem(
              "userTypeName",
              JSON.stringify(res.userType.typeName)
            );
            this.loggedIn = true;
            return res;
          }
        })
      );
  }
}
