import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Service, Organization } from './data-model';

@Component({
    selector: 'service-detail',
    templateUrl: './service-detail.component.html'
})
export class ServiceDetailComponent {
    serviceForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.serviceForm = this.fb.group({
            name: ['', Validators.required ], // FormControl
            status: '',
            organization: this.fb.group({
                name: '',
                description: ''
            })
        });
    }
}

