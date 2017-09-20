export class Service {
    _id = '';
    _rev: null;
    //organization: Organization;
    organizationName = '';
    contact: Contact;
    physicalAddress: PhysicalAddress;
    contactNumbers: ContactNumber[];
    regularSchedules: RegularSchedule[];
    name = ''; 
    description = '';
    url = '';
    email = '';
    court = '';
    applicationProcess = '';
    geographicEligibility = '';
    financialEligibility = '';
    fees = '';
}

export class Organization {
    name = '';
    description = ''; 
    email = '';
    url = '';
    taxStatus = '';
    taxId = '';
    yearIncorporated = '';
    legalStatus = '';
    services: Service[];
}

export class Program {
    name = '';
}

export class PhysicalAddress {
    address_1 = ''; 
    address_2 = '';
    address_3 = '';
    county = ''; 
    city = ''; 
    state = ''; 
    zip = '';
    country = 'USA'; 
}

export class ContactNumber { 
    number = '';  
    extension = '';
    type = '';
}

export class RegularSchedule {
    weekday = ''; 
    opensAt = '';
    closesAt = '';
}

export class Contact {
    name = '';
    title = '';
}

export class Eligibility {
    name = '';
    type = '';
}