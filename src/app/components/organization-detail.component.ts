import { Component, OnChanges, Input } from '@angular/core';
import { Organization } from '../data-model';

@Component({
    selector: 'organization-detail',
    templateUrl: './organization-detail.component.html'
})
export class OrganizationDetailComponent {
    @Input() organization: Organization;
}
