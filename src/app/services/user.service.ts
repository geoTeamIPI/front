import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { User } from "../models/user.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
  observe: "response"
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  private userUrl = "/users";

  public findAllUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public getUser(id: number) {
    return this.http.get(this.userUrl + "/infos/" + id);
  }

  public createUser(user: User) {
    return this.http.post<User>(this.userUrl + "/add", user);
  }

  public updateUser(id: number, value: any) {
    return this.http.post<User>(this.userUrl + "/update/" + id, value);
  }

  public deleteUser(id: number) {
    return this.http.delete(this.userUrl + "/delete/" + id);
  }
}
