import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container p-5" style="font-size:1.5rem">
      <h1>Massachusetts Lawyer for the Day Programs</h1>    
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" routerLink="/service-list" routerLinkActive="active">Program List</a>
        </li>
        <li class="nav-item">
          <a  class="nav-link" routerLink="/service-edit" routerLinkActive="active">Create New Program</a>
        </li>
      </ul>
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {}
