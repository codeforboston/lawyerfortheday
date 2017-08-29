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
    organization_id = '';
    location_id = '';
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
    organization_id = '';
    name = '';
    alternate_name = '';
    description = '';
    transportation = '';
    latitude = '';
    longitude = '';
}

export class RegularSchedule {
    id = '';
    service_id = '';
    location_id = '';
    service_at_location_id = '';
    weekday = 0;
    opens_at = '';
    closes_at = '';
}