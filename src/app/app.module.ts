import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceDetailComponent } from './components/service-detail.component';
import { ServiceListComponent } from './components/service-list.component';
import { OrganizationDetailComponent } from './components/organization-detail.component';
import { OrganizationListComponent } from './components/organization-list.component';
import { LegalServicesService } from './services/legal-services.service';


@NgModule({
  declarations: [
    AppComponent,
    ServiceDetailComponent,
    ServiceListComponent,
    OrganizationDetailComponent,
    OrganizationListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [LegalServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
