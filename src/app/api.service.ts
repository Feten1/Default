import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

   private URLbase = "http://localhost:8081/rest/";

   getTasksByUser(username: any): Observable<any> {
     return this.http.get(`${this.URLbase}`+ `task?assignee=`+ username);
   }

   getAllTasks(): Observable<any> {
    return this.http.get(`${this.URLbase}`+ `task`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.URLbase}`+ `user/create`,user);
  }

  assignUser(taskID,userId: any): Observable<any> {
    return this.http.post<any>(`${this.URLbase}`+ `task/`+ taskID + `/assignee`,userId);
  }

  createGroup(user: any): Observable<any> {
    return this.http.post<any>(`${this.URLbase}`+ `group/create`,user);
  }

  getAllGroups(): Observable<any> {
    return this.http.get(`${this.URLbase}`+ `group`);
  }

  assignUserToGroup(groupId,userId: any): Observable<any> {
    return this.http.put<any>(`${this.URLbase}`+ `group/`+ groupId + `/members/` + userId, "");
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.URLbase}`+ `user`);
  }



}
