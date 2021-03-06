import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DatePipe, Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Service, Organization, Program, RegularSchedule, Contact,
    ContactNumber, PhysicalAddress, ServicesProvidedOptions,
    VolunteerCapacityOptions, TrainingOptions, CourtOptions
} from '../data-model';
import { CouchDBService } from '../services/couchdb.service';

@Component({
    selector: 'service-edit',
    templateUrl: './service-edit.component.html'
})
export class ServiceEditComponent implements OnInit {
    service: Service;  // data
    serviceForm: FormGroup;     // form
    servicesProvidedOptions = ServicesProvidedOptions;
    volunteerCapacityOptions = VolunteerCapacityOptions;
    trainingOptions = TrainingOptions;
    courtOptions = CourtOptions;

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
            organizationName: '',
            name: '',
            description: '',
            geographicEligibility: '',
            financialEligibility: '',
            servicesProvided: this.fb.array([]),
            otherServicesProvided: '',
            physicalAddress: this.getPhysicalAddressFG(null),
            url: '',
            email: '',
            contactNumbers: this.fb.array([]),
            contact: this.getContactFG(new Contact()),
            regularSchedules: this.fb.array([]),
            volunteerCapacity: '',
            selectedCourt: '',
            training: '',
            appointmentRequired: false,
            fees: '',
            editorName: '',
            editorEmail: ''
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
            description: this.service.description != null ? this.service.description : '',
            physicalAddress: this.getPhysicalAddressFG(this.service.physicalAddress),
            url: this.service.url != null ? this.service.url : '',
            email: this.service.email != null ? this.service.email : '',
            geographicEligibility: this.service.geographicEligibility != null ? this.service.geographicEligibility : '',
            financialEligibility: this.service.financialEligibility != null ? this.service.financialEligibility : '',
            volunteerCapacity: this.service.volunteerCapacity != null ? this.service.volunteerCapacity : '',
            selectedCourt: this.service.selectedCourt != null ? this.service.selectedCourt : '',
            training: this.service.training != null ? this.service.training : '',
            appointmentRequired: this.service.appointmentRequired != null ? this.service.appointmentRequired : false,
            fees: this.service.fees != null ? this.service.fees : '',
            editedAt: DatePipe.prototype.transform(Date.now(), 'yyyy-MM-ddTHH:mm')
        });

        this.serviceForm.setControl('physicalAddress', this.getPhysicalAddressFG(this.service.physicalAddress));
        this.serviceForm.setControl('contact', this.getContactFG(this.service.contact));
        this.serviceForm.setControl('regularSchedules', this.getRegularScheduleFA(this.service.regularSchedules));
        this.serviceForm.setControl('contactNumbers', this.getContactNumberFA(this.service.contactNumbers));
        this.serviceForm.setControl('servicesProvided', this.getServicesProvidedFA(this.service.servicesProvided));
    }

    getRegularScheduleFA(_regularSchedules): FormArray {
        // regular schedule form array
        if (_regularSchedules == null) {
            _regularSchedules = [
                {weekday:"Monday", opensAt:"09:00", closesAt:"17:00"},
                {weekday:"Tuesday", opensAt:"09:00", closesAt:"17:00"},
                {weekday:"Wednesday", opensAt:"09:00", closesAt:"17:00"},
                {weekday:"Thursday", opensAt:"09:00", closesAt:"17:00"},
                {weekday:"Friday", opensAt:"09:00", closesAt:"17:00"},
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

    getServicesProvidedFA(_servicesProvided): FormArray {
        if (_servicesProvided == null) {
            _servicesProvided = new Array<string>();
        }
        var ctrl;
        var servicesProvidedFCs = new Array<FormControl>();

        for (var i=0; i < this.servicesProvidedOptions.length; i++) {
            if (_servicesProvided.includes(this.servicesProvidedOptions[i])) {
                ctrl = new FormControl(true);
            }
            else {
                ctrl = new FormControl(false);
            }
            servicesProvidedFCs.push(ctrl);
        }
        return this.fb.array(servicesProvidedFCs);
    }

    get servicesProvided(): FormArray {
        return this.serviceForm.get('servicesProvided') as FormArray;
    }

    ngOnChanges() {
        this.serviceForm.reset();
        this.loadService();
    }

    saveService() {
        this.service = this.prepareSaveService();
        this.webService.saveLegalService(this.service).then(
            response => {
                this.router.navigateByUrl('/service-view/' + this.service._id); 
            }
        );
    }

    deleteService() {
        this.webService.deleteLegalService(this.service).then(
            response => {
                this.router.navigateByUrl('/'); 
            }
        );
    }

    goBack() {
        this.location.back();
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
        var servicesProvidedValues = new Array<string>();
        for (var i = 0; i < formModel.servicesProvided.length; i++) {
            if (formModel.servicesProvided[i]) {
                servicesProvidedValues.push(this.servicesProvidedOptions[i]);
            }
        }

        var dateNow = DatePipe.prototype.transform(Date.now(), 'yyyy-MM-ddTHH:mm');

        const saveService: Service = {
            _id: this.service._id,
            _rev: this.service._rev,
            organizationName:formModel.organizationName,
            name: formModel.name,
            description: formModel.description,
            financialEligibility: formModel.financialEligibility,
            geographicEligibility: formModel.geographicEligibility,
            servicesProvided: servicesProvidedValues,
            otherServicesProvided: formModel.otherServicesProvided,
            regularSchedules: regularSchedulesDeepCopy,
            physicalAddress: formModel.physicalAddress,
            url: formModel.url,
            email: formModel.email,
            contactNumbers: contactNumbersDeepCopy,
            contact: formModel.contact,
            volunteerCapacity: formModel.volunteerCapacity,
            selectedCourt: formModel.selectedCourt,
            training: formModel.trainingOptions,
            appointmentRequired: formModel.appointmentRequired,
            fees: formModel.fees,
            editorName: formModel.editorName,
            editorEmail: formModel.editorEmail,
            dateUpdated: dateNow,
            dateReviewed: dateNow
        }

        return saveService;
    }
}
