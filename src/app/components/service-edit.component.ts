import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Service, Organization, Program, RegularSchedule, Contact, 
    ContactNumber, PhysicalAddress } from '../data-model';
import { CouchDBService } from '../services/couchdb.service';

@Component({
    selector: 'service-edit',
    templateUrl: './service-edit.component.html'
})
export class ServiceEditComponent implements OnInit {
    service: Service;  // data
    serviceForm: FormGroup;     // form

    constructor(private fb: FormBuilder, 
        private webService: CouchDBService,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location
    ) {
        this.createForm();
    }

    createForm() {
        this.serviceForm = this.fb.group({
            name: '',
            organizationName: '',
            court: '',
            description: '',           
            regularSchedules: this.fb.array([]),
            physicalAddress: this.getPhysicalAddressFG(null),
            url: '',
            email: '',
            contactNumbers: this.fb.array([]),
            contact: this.getContactFG(new Contact()),
            geographicEligibility: '',
            financialEligibility: '',
            applicationProcess: '',
            fees: ''
        });
    }

    ngOnInit() {
        this.loadService();
    }

    loadService() {
        let id = this.route.snapshot.paramMap.get('id');
        if (id != null) {
            this.webService.getLegalService(id).then(
                service => {
                    this.service = service;
                    this.prepopulateForm();
                }
            );
        }
        else {
            this.webService.generateUuid().then(uuid => {
                this.service = new Service();
                this.service._id = uuid;
                this.prepopulateForm();
            });            
        }
    }

    prepopulateForm() {        
        this.serviceForm.patchValue({
            name: this.service.name != null ? this.service.name : '',
            organizationName: this.service.organizationName != null ? this.service.organizationName : '',
            court: this.service.court != null ? this.service.court : '',
            description: this.service.description != null ? this.service.description : '',
            physicalAddress: this.getPhysicalAddressFG(this.service.physicalAddress),
            url: this.service.url != null ? this.service.url : '',
            email: this.service.email != null ? this.service.email : '',
            geographicEligibility: this.service.geographicEligibility != null ? this.service.geographicEligibility : '',
            financialEligibility: this.service.financialEligibility != null ? this.service.financialEligibility : '',
            applicationProcess: this.service.applicationProcess != null ? this.service.applicationProcess : '',
            fees: this.service.fees != null ? this.service.fees : ''
        });

        this.serviceForm.setControl('physicalAddress', this.getPhysicalAddressFG(this.service.physicalAddress));
        this.serviceForm.setControl('contact', this.getContactFG(this.service.contact));
        this.serviceForm.setControl('regularSchedules', this.getRegularScheduleFA(this.service.regularSchedules));
        this.serviceForm.setControl('contactNumbers', this.getContactNumberFA(this.service.contactNumbers));
    }

    getRegularScheduleFA(_regularSchedules): FormArray {
        // regular schedule form array
        if (_regularSchedules == null) {
            _regularSchedules = [
                {weekday:"Monday", opensAt:"9:00 am", closesAt:"5:00 pm"},
                {weekday:"Tuesday", opensAt:"9:00 am", closesAt:"5:00 pm"},
                {weekday:"Wednesday", opensAt:"9:00 am", closesAt:"5:00 pm"},
                {weekday:"Thursday", opensAt:"9:00 am", closesAt:"5:00 pm"},
                {weekday:"Friday", opensAt:"9:00 am", closesAt:"5:00 pm"},
                {weekday:"Saturday", opensAt:"", closesAt:""},
                {weekday:"Sunday", opensAt:"", closesAt:""}
            ];
        }
        var regularScheduleFGs = _regularSchedules.map(
            regularSchedule=>this.fb.group(regularSchedule));
        var regularScheduleFA = this.fb.array(regularScheduleFGs);
        return regularScheduleFA;
    }

    getContactNumberFA(_contactNumbers: ContactNumber[]): FormArray {
        if (_contactNumbers == null) {
            _contactNumbers = new Array<ContactNumber>();
        }
        var contactNumberFGs = _contactNumbers.map(
            contactNumber=>this.fb.group(contactNumber));
        var contactNumberFA = this.fb.array(contactNumberFGs);
        return contactNumberFA;
    }

    getPhysicalAddressFG(_physicalAddress: PhysicalAddress): FormGroup {
        if (_physicalAddress == null) {
            _physicalAddress = new PhysicalAddress();
        }
        return this.fb.group(_physicalAddress);
    }

    getContactFG(_contact: Contact) {
        if (_contact == null) {
            _contact = new Contact();
        }
        return this.fb.group(_contact);
    }

    get contactNumbers(): FormArray {
        return this.serviceForm.get('contactNumbers') as FormArray;
    }

    addContactNumber() {
        this.contactNumbers.push(this.fb.group(new ContactNumber()));
    }

    get regularSchedules(): FormArray {
        return this.serviceForm.get('regularSchedules') as FormArray;
    }

    ngOnChanges() {
        console.log("ngOnChanges");
        this.serviceForm.reset();
        this.loadService();
    }

    onSubmit() {
        this.service = this.prepareSaveService();
        this.webService.saveLegalService(this.service);
        this.router.navigateByUrl('/');
    }

    // return new `Service` object containing a combination of original service value(s)
    // and deep copies of changed form model values
    prepareSaveService() {
        const formModel = this.serviceForm.value;
        var contactNumbersDeepCopy = formModel.contactNumbers.map(
            (contactNumber: ContactNumber) => Object.assign({}, contactNumber)
        );
        var regularSchedulesDeepCopy = formModel.regularSchedules.map(
            (regularSchedule: RegularSchedule) => Object.assign({}, regularSchedule)
        );
        const saveService: Service = {
            _id: this.service._id,
            _rev: this.service._rev,
            organizationName:formModel.organizationName,
            contact: formModel.contact,
            physicalAddress: formModel.physicalAddress,
            contactNumbers: contactNumbersDeepCopy,
            regularSchedules: regularSchedulesDeepCopy,
            name: formModel.name, 
            description: formModel.description,
            url: formModel.url,
            email: formModel.email,
            court: formModel.court,
            applicationProcess: formModel.applicationProcess,
            financialEligibility: formModel.financialEligibility,
            geographicEligibility: formModel.geographicEligibility,
            fees: formModel.fees
        }
        return saveService;
    }
}

