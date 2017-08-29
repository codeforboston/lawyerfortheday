import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegularSchedule } from './data-model';

@Component({
    selector: 'regular-schedule-detail',
    templateUrl: './regular-schedule.component.html'
})
export class RegularScheduleComponent {
    @Input() regularSchedule: RegularSchedule;
    regularScheduleForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.regularScheduleForm = this.fb.group({
            weekday: '',
            opensAt: '',
            closesAt: ''
        });
    }
}
