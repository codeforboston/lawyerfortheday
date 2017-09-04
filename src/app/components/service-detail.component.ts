import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service, Organization, Program, RegularSchedule, Contact, 
    ContactNumber, PhysicalAddress } from '../data-model';
import { LegalServicesService } from '../services/legal-services.service';

@Component({
    selector: 'service-detail',
    templateUrl: './service-detail.component.html'
})
export class ServiceDetailComponent {
    @Input() service: Service;
    organization: Organization;
    program: Program;
    address: PhysicalAddress;
    regularSchedules: RegularSchedule[];
    contactNumbers: ContactNumber[];
    serviceForm: FormGroup;

    constructor(private fb: FormBuilder, 
        private webService: LegalServicesService) {
        this.createForm();
    }

    createForm() {
        this.serviceForm = this.fb.group({
            name: ['', Validators.required ], // 
            organizationName: '',
            description: '',
            url: '',
            email: '',
            status: '',
            applicationProcess: '',
            fees: '',
            organization: this.fb.group(new Organization()),
            program: this.fb.group(new Program()),
            regularSchedule: this.fb.group(new RegularSchedule()),
            physicalAddress: this.fb.group(new PhysicalAddress()),
            phones: this.fb.array([]),
            contact: this.fb.group(new Contact())
        });

        /* initialize contact numbers form array */
        var contactNumber = new ContactNumber();
        contactNumber.id = '';
        contactNumber.number = '';
        contactNumber.extension = '';
        contactNumber.type = '';
        this.contactNumbers = [contactNumber];
        const contactNumberFGs = this.contactNumbers.map(contactNumber => this.fb.group(contactNumber));
        const contactNumberFA = this.fb.array(contactNumberFGs);
        this.serviceForm.setControl('contactNumberFA', contactNumberFA);

        /* initialize regular schedules form array */
        var schedule = new RegularSchedule();
        schedule.id = '';
        schedule.weekday = 'Monday';
        schedule.opensAt = '9:00 am';
        schedule.closesAt = '5:00 pm'
        this.regularSchedules = [schedule];
        const regularScheduleFGs = this.regularSchedules.map(regularSchedule => this.fb.group(regularSchedule));
        const regularScheduleFA = this.fb.array(regularScheduleFGs);
        this.serviceForm.setControl('regularScheduleFA', regularScheduleFA);
    }

    get contactNumberFA(): FormArray {
        return this.serviceForm.get('contactNumberFA') as FormArray;
    }

    addContactNumber() {
        this.contactNumberFA.push(this.fb.group(new ContactNumber()));
    }

    get regularScheduleFA(): FormArray {
        return this.serviceForm.get('contactNumberFA') as FormArray;
    }

    addRegularSchedule() {
        this.regularScheduleFA.push(this.fb.group(new ContactNumber()));
    }

    ngOnChanges() {
        this.serviceForm.patchValue({
            name: this.service.name
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
            applicationProcess: this.service.applicationProcess
        });
        this.serviceForm.patchValue({
            fees: this.service.fees
        });

        this.organization = new Organization();
    }
}

