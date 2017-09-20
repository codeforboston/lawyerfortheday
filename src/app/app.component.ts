import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container p-5">
      <h1>Massachusetts Lawyer For The Day Programs</h1>    
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" routerLink="/service-list" routerLinkActive="active">Service List</a>
        </li>
        <li class="nav-item">
          <a  class="nav-link" routerLink="/service-edit">Create New Service</a>
        </li>
      </ul>
      <div>
      <router-outlet></router-outlet>
    </div>
    </div>
  `
})
export class AppComponent {}
