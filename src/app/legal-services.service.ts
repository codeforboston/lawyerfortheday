import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Service } from './data-model';

@Injectable()
export class LegalServicesService {
    private serviceUrl = 'http://api.open.referral.adopta.agency/services/?per_page=5';
    
    constructor(private http: Http) { }

    getLegalServices(): Promise<Service[]> {
        return this.http.get(this.serviceUrl)
            .toPromise()
            .then(response => response.json() as Service[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo only
        return Promise.reject(error.message || error);
    }
}