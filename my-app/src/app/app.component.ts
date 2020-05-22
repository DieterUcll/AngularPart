import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<h1>{{title}}</h1>
    <nav>
        <a routerLink="/users">Users</a>
    </nav>
    <router-outlet></router-outlet>
    `
})

export class AppComponent {
  title = 'Get the users';
}
