import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-my-users',
  templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {

  // dependency injection
  constructor(private userService: UserService) {
  }
  title = 'Chat App Users';
  selectedUser: User;
  users: User[];

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  // Call subscribe() to start listening for updates
  getUsers(): void {
    // polling
    timer(0, 2500)
      .subscribe(() => {
        this.userService.getUsers()
          .subscribe(data => this.users = data);
      });
  }

  postUserToServer(): void {
    timer(0, 5000)
      .subscribe(() => {
        this.userService
          .postUserToServer(this.selectedUser)
          .subscribe(user => this.users.push(user));
      });
  }



  ngOnInit(): void {
    this.getUsers();
    this.postUserToServer();
  }
}
