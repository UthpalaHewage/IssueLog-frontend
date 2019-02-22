import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/internal/operators/map";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerNewUser(newUser: object) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http
      .post<any>(environment.baseUrl + "/api/User", newUser, {
        headers
      })
      .pipe(
        map(res => {
          console.log(res);
          return res;
        })
      );
  }
}
