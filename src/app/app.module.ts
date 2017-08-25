import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceDetailComponent } from './service-detail.component';
import { ServiceListComponent } from './service-list.component';
import { LegalServicesService } from './legal-services.service';


@NgModule({
  declarations: [
    AppComponent,
    ServiceDetailComponent,
    ServiceListComponent,
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
