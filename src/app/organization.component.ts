import { Component, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Organization } from './data-model';

@Component({
    selector: 'organization-detail',
    templateUrl: './organization.component.html'
})
export class OrganizationComponent {
    @Input() organization: Organization;
    organizationForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.organizationForm = this.fb.group({
            name: '',
            alternateName: '',
            description: '',
            email: '',
            url: '',
            taxStatus: '',
            taxId: '',
            yearIncorporated: '',
            legalStatus: ''
        });
    }

    ngOnChanges() {
        this.organizationForm.patchValue({
            name: this.organization.name
        });
        this.organizationForm.patchValue({
            alternateName: this.organization.alternate_name
        });
        this.organizationForm.patchValue({
            description: this.organization.description
        });
        this.organizationForm.patchValue({
            email: this.organization.email
        });
        this.organizationForm.patchValue({
            url: this.organization.url
        });
        this.organizationForm.patchValue({
            taxStatus: this.organization.tax_status
        });
        this.organizationForm.patchValue({
            taxId: this.organization.tax_id
        });
        this.organizationForm.patchValue({
            yearIncorporated: this.organization.year_incorporated
        });
        this.organizationForm.patchValue({
            legalStatus: this.organization.legal_status
        });
    }
}
