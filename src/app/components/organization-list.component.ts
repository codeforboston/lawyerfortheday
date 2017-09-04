import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Organization } from '../data-model';
import { LegalServicesService } from '../services/legal-services.service';

@Component({
    selector: 'organization-list',
    templateUrl: './organization-list.component.html'
})
export class OrganizationListComponent {
    organizations: Organization[];
    selectedOrganization: Organization;

    constructor(private webService: LegalServicesService) { }

    ngOnInit(): void {
        this.webService.getOrganizations().then(
         organizations => {
             console.log(organizations);
             this.organizations = organizations;
         });
    }

    onSelect(organization): void {
        this.selectedOrganization = organization;
    }
}
