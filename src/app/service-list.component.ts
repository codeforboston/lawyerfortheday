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

    constructor(private webService: LegalServicesService) { }

    ngOnInit(): void {
       this.webService.getLegalServices().then(
        services => {
            this.services = services;
            if (this.services.length > 0) {
                this.onSelect(this.services[0]);
            }
        });
    }

    onSelect(service: Service): void {
        this.selectedService = service;
    }
}

