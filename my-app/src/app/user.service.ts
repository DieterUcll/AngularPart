import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { User } from './user';

import {Observable} from 'rxjs';

// dependency injection
@Injectable()
export class UserService {

  private usersUrlGet = 'http://localhost:8081/Controller?action=AngularGet';
  private usersUrlPoll = 'http://localhost:8081/Controller?action=AngularPost';

  // dependency injection
  constructor(private http: HttpClient) {
  }

  // Observables provide support for passing messages between
  // publishers and subscribers in your application
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrlGet);
  }

  /** POST: add a new hero to the database */
  postUserToServer(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type'
      })};

    const json = JSON.stringify(user);
    return this.http.post<User>(this.usersUrlPoll, json, httpOptions);
  }
}
