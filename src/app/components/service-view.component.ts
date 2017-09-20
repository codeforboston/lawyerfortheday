import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Service, Organization, Program, RegularSchedule, Contact, 
    ContactNumber, PhysicalAddress } from '../data-model';
import { CouchDBService } from '../services/couchdb.service';
import {Inject} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'service-view',
    templateUrl: './service-view.component.html'
})
export class ServiceViewComponent implements OnInit {
    service: Service;  // data
    who = " world!";
    serviceId = "";

    constructor(
        private webService: CouchDBService,
        private route: ActivatedRoute,
        private location: Location,
        public dialogRef: MdDialogRef<ServiceViewComponent>,
        @Inject(MD_DIALOG_DATA) public data: any
    ) {
        this.serviceId = data.id;
        console.log(this.serviceId);
    }


    ngOnInit() {
        //let id = this.route.snapshot.paramMap.get('id');
        let id = this.serviceId;
        if (id != null) {
            this.webService.getLegalService(id).then(
                service => {
                    this.service = service;
                    this.who = this.service.name;
                }
            );
        }
    }    
}

