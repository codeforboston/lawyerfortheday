import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from './data-model';

@Component({
    selector: 'location-detail',
    templateUrl: './location.component.html'
})
export class LocationComponent {
    @Input() location: Location;
    locationForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.locationForm = this.fb.group({
            name: '',
            alternateName: '',
            description: '',
            transportation: '',
            latitude: '',
            longitude: ''
        });
    }
}
