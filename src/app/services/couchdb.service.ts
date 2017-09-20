import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Service, Organization } from '../data-model';

@Injectable()
export class CouchDBService {
    private headers = new Headers({'Content-Type': 'application/json'});    
    private dbUrl = "http://localhost:5984/";
    private generateUuidUrl = this.dbUrl + "_uuids";
    private baseServiceUrl = this.dbUrl + "legalservices/";
    private fetchAllServicesUrl = this.baseServiceUrl + "_all_docs?include_docs=true";

    constructor(private http: Http) { }

    getLegalServices(): Promise<Service[]> {
        return this.http.get(this.fetchAllServicesUrl)
            .toPromise()
            .then(response => {
                var responseJson = response.json();
                var services = [];
                for (var i = 0; i < responseJson["total_rows"]; i++) {
                    services.push(responseJson["rows"][i]["doc"] as Service);
                }
                return services;
            })
            .catch(this.handleError);
    }

    getLegalService(id: string): Promise<Service> {
        return this.http.get(this.baseServiceUrl + id)
            .toPromise()
            .then(response => {
                return response.json() as Service;
            })
            .catch(this.handleError);
    }

    generateUuid() {
        return this.http.get(this.generateUuidUrl)
            .toPromise()
            .then(response => {
                var uuids = response.json()["uuids"];
                return uuids[0] as string;
            })
            .catch(this.handleError);
    }

    saveLegalService(service:Service) {
        return this.http.put(this.baseServiceUrl + service._id, JSON.stringify(service), 
            {headers: this.headers})
            .toPromise()
            .then(response => {
                
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo only
        return Promise.reject(error.message || error);
    }
}