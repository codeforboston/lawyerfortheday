import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service, Organization, Location, RegularSchedule } from './data-model';
import { LegalServicesService } from './legal-services.service';

@Component({
    selector: 'service-detail',
    templateUrl: './service-detail.component.html'
})
export class ServiceDetailComponent {
    @Input() service: Service;
    organization: Organization;
    location: Location;
    regularSchedule: RegularSchedule;
    serviceForm: FormGroup;

    constructor(private fb: FormBuilder, 
        private webService: LegalServicesService) {
        this.createForm();
    }

    createForm() {
        this.serviceForm = this.fb.group({
            name: ['', Validators.required ], // FormControl
            alternateName: '',
            description: '',
            url: '',
            email: '',
            status: '',
            interpretationServices: '',
            applicationProcess: '',
            waitTime: '',
            fees: '',
            accreditations: '',
            licenses: '',
            organization: this.fb.group(new Organization()),
            location: this.fb.group(new Location()),
            regularSchedule: this.fb.group(new RegularSchedule())
        });
    }

    ngOnChanges() {
        this.serviceForm.patchValue({
            name: this.service.name
        });
        this.serviceForm.patchValue({
            alternateName: this.service.alternate_name
        });
        this.serviceForm.patchValue({
            description: this.service.description
        });
        this.serviceForm.patchValue({
            url: this.service.url
        });
        this.serviceForm.patchValue({
            email: this.service.email
        });
        this.serviceForm.patchValue({
            status: this.service.status
        });
        this.serviceForm.patchValue({
            interpretationServices: this.service.interpretation_services
        });
        this.serviceForm.patchValue({
            applicationProcess: this.service.application_process
        });
        this.serviceForm.patchValue({
            waitTime: this.service.wait_time
        });
        this.serviceForm.patchValue({
            fees: this.service.fees
        });
        this.serviceForm.patchValue({
            accreditations: this.service.accreditations
        });
        this.serviceForm.patchValue({
            licenses: this.service.licenses
        });

        if (this.service.organization_id != '') {
            this.webService.getOrganization(this.service.organization_id).then( 
                organization => {
                   this.organization = organization;
                }
            );
        }
        else {
            this.organization = new Organization();
        }
    }
}

