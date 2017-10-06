import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DatePipe, Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Service, Organization, Program, RegularSchedule, Contact, 
    ContactNumber, PhysicalAddress, ServicesProvidedOptions, 
    VolunteerCapacityOptions, TrainingOptions
} from '../data-model';
import { CouchDBService } from '../services/couchdb.service';

@Component({
    selector: 'service-view',
    templateUrl: './service-view.component.html'
})
export class ServiceViewComponent implements OnInit {
    service: Service;  // data

    constructor(private webService: CouchDBService,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit() {
        this.loadService();
    }

    loadService() {
        let id = this.route.snapshot.paramMap.get('id');
        if (id != null) {
            this.webService.getLegalService(id).then(
                service => {
                    this.service = service;
                }
            );
        }
    }

    markAsReviewed() {
        this.service.dateReviewed = DatePipe.prototype.transform(Date.now(), 'yyyy-MM-ddTHH:mm');
        this.webService.saveLegalService(this.service).then(
            response => {
                location.reload();
            }
        );
    }
}

