import {Component, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MdSort, MdSortModule} from '@angular/material';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import {LegalServicesService} from '../services/legal-services.service';
import {CouchDBService} from '../services/couchdb.service';
import {Service} from '../data-model';
import {ServiceViewComponent} from './service-view.component';

@Component({
    selector: 'service-list',
    templateUrl: './service-list.component.html'
})
export class ServiceListComponent {
    displayedColumns = ['name', 'organizationName', 'county', 'court', 'dateReviewed', 'edit'];
    dataSource: DataSource<any>;
    serviceDatabase = new ServiceDatabase();

    @ViewChild(MdSort) sort: MdSort;

    constructor(private webService: CouchDBService, public dialog: MdDialog) { }

    ngOnInit(): void {
        this.webService.getLegalServices().then(
            legalServices => {
               this.serviceDatabase.dataChange.next(legalServices);
               this.dataSource = new ServiceDataSource(this.serviceDatabase, this.sort);
            });
    }

    ngOnChanges() :void {
        console.log("ngOnChanges");
    }
}

export class ServiceDatabase {
    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<Service[]> = new BehaviorSubject<Service[]>([]);
    get data(): Service[] { return this.dataChange.value; }
}

export class ServiceDataSource extends DataSource<any> {
    constructor(private _legalServices:ServiceDatabase, private _sort: MdSort)  {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Service[]> {
        const displayDataChanges = [
            this._legalServices.dataChange,
            this._sort.mdSortChange,
          ];

        return Observable.merge(...displayDataChanges).map(() => {
            return this.getSortedData();
        });
    }

    disconnect() {}

    /** Returns a sorted copy of the database data. */
    getSortedData(): Service[] {
        const data = this._legalServices.data.slice();
        if (!this._sort.active || this._sort.direction == '') { return data; }

        return data.sort((a, b) => {
            let propertyA: number|string = '';
            let propertyB: number|string = '';

            switch (this._sort.active) {
                case 'name': [propertyA, propertyB] = [a.name, b.name]; break;
                case 'organizationName': [propertyA, propertyB] = [a.organizationName, b.organizationName]; break;
                case 'city': [propertyA, propertyB] = [a.physicalAddress.city, b.physicalAddress.city]; break;
                case 'county': [propertyA, propertyB] = [a.physicalAddress.county, b.physicalAddress.county]; break;
                case 'court': [propertyA, propertyB] = [a.selectedCourt, b.selectedCourt]; break;
                case 'dateReviewed': [propertyA, propertyB] = [a.dateReviewed, b.dateReviewed]; break;
            }

            // let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            // let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            let valueA = propertyA;
            let valueB = propertyB;
            // console.log("valueA " + valueA);
            // console.log("valueB " + valueB);
            // console.log(valueA.toLowerCase().toString() < valueB.toLowerCase().toString());

            return (valueA.toLowerCase() < valueB.toLowerCase() ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
        });
    }
}