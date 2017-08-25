import { Component, OnInit } from '@angular/core';

import { Service } from './data-model';
import { LegalServicesService } from './legal-services.service';

@Component({
    selector: 'service-list',
    templateUrl: './service-list.component.html'
})
export class ServiceListComponent implements OnInit {
    selectedService: Service;
    services: Service[];

    constructor(private service: LegalServicesService) { }

    ngOnInit(): void {
        this.service.getLegalServices().then(
            services => this.services = services);
      }

    onSelect(service: Service): void {
        this.selectedService = service;
    }
}

