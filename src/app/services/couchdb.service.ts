import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Service, Organization } from '../data-model';
import { environment } from "../../environments/environment";

@Injectable()
export class CouchDBService {
    private headers = new Headers({'Content-Type': 'application/json'});    
    private dbUrl = environment.dbURL;
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
                return response;
            })
            .catch(this.handleError);
    }

    deleteLegalService(service:Service) {
        return this.http.delete(this.baseServiceUrl + service._id + "?rev=" + service._rev, 
            {headers: this.headers})
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(this.handleError);
    }
    /*
    curl -X DELETE http://127.0.0.1:5984/legalservices/8845d00927010801686e82b42c001b91?rev=2-71988f0a5e6e985ebf0bafa1fae3859c 
    
    */

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo only
        return Promise.reject(error.message || error);
    }
}
