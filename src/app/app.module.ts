import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MdTableModule, MdSortModule, MdDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ServiceEditComponent } from './components/service-edit.component';
import { ServiceViewComponent } from './components/service-view.component';
import { ServiceListComponent } from './components/service-list.component';
import { LegalServicesService } from './services/legal-services.service';
import { CouchDBService } from './services/couchdb.service';

const appRoutes: Routes = [
  { path: 'service-list', component: ServiceListComponent },
  { path: 'service-edit/:id', component: ServiceEditComponent},
  { path: 'service-edit', component: ServiceEditComponent},
  { path: 'service-view/:id', component: ServiceViewComponent},
  { 
    path: '',
    redirectTo: '/service-list',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceEditComponent,
    ServiceViewComponent,
    ServiceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdTableModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MdSortModule,
    MdDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [LegalServicesService, CouchDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
