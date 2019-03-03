import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/internal/operators/map";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getUserProjectList(userId: string) {
    return this.http.get(
      environment.baseUrl + "/api/project/userproject/" + userId
    );
  }

  getPromangrList() {
    return this.http.get(
      environment.baseUrl + "/api/User/GetAllProjectManagers"
    );
  }

  getProleaderList() {
    return this.http.get(
      environment.baseUrl + "/api/User/GetAllProjectLeaders"
    );
  }

  getClientList() {
    return this.http.get(environment.baseUrl + "/api/User/GetAllClients");
  }

  //newly added project
  addNewProject(newProject: object) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http
      .post<any>(environment.baseUrl + "/api/Project", newProject, {
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
