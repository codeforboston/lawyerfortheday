export class Organization {
    id = '';
    name = '';
    alternate_name =' ';
    description = '';
    email = '';
    url = '';
    tax_status = '';
    tax_id = '';
    year_incorporated = '';
    legal_status = '';
}

export class Service {
    id = '';
    organization: Organization;
    location: Location;
    program_id = '';
    name = '';
    alternate_name = '';
    description = '';
    url = '';
    email = '';
    status = '';
    interpretation_services = '';
    application_process = '';
    wait_time = '';
    fees = '';
    accreditations = '';
    licenses = '';
}

export class Location {
    id = '';
//    organization: Organization;
    name = '';
    alternate_name = '';
    description = '';
    transportation = '';
    latitude = '';
    longitude = '';
  }