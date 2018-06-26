import { Component, OnInit, Input } from "@angular/core";

import { UserService } from "../services/user.service";
import { User } from "../models/user.model";
import { Observable } from "rxjs";

@Component({
  selector: "list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.css"]
})
export class ListUsersComponent implements OnInit {
  users: User[];
  //@Input() user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.reloadData();
  }

  deleteUser(id: number) {
    if (confirm("Etes-vous sûr de vouloir supprimer cet utilisateur") == true) {
      this.userService
        .deleteUser(id)
        .subscribe(data => console.log(), err => console.log(err));
      this.reloadData();
    }
  }

  reloadData() {
    this.userService
      .findAllUsers()
      .subscribe(users => (this.users = users), err => console.log(err));
  }
}
