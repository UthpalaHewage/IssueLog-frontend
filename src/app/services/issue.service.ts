import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/internal/operators/map";

@Injectable({
  providedIn: "root"
})
export class IssueService {
  constructor(private http: HttpClient) {}

  getProjectIssueList(projectId: string) {
    return this.http.get(
      environment.baseUrl + "/api/issue/projectissues/" + projectId
    );
  }

  getIssueById(issueId: string) {
    return this.http.get(environment.baseUrl + "/api/issue/" + issueId);
  }

  //newly added
  addNewIssue(newIssue: object) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http
      .post<any>(environment.baseUrl + "/api/Issue", newIssue, {
        headers
      })
      .pipe(
        map(res => {
          console.log(res);
          return res;
        })
      );
  }

  updateIssue(issueId: number, editedUser: object) {
    return this.http
      .put<any>(environment.baseUrl + "/api/issue/" + issueId, editedUser)
      .pipe(
        map(res => {
          console.log(res);
          return res;
        })
      );
  }
}
