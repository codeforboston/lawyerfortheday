export class Service {
    id = '';
    organization: Organization;
    program: Program;
    contact: Contact;
    physicalAddress: PhysicalAddress;
    contactNumbers: ContactNumber[];
    regularSchedules: RegularSchedule[];
    name = ''; 
    description = '';
    url = '';
    email = '';
    status = 'active';
    applicationProcess = '';
    fees = '';
}

export class Organization {
    id = ''; 
    name = '';
    description = ''; 
    email = '';
    url = '';
    taxStatus = '';
    taxId = '';
    yearIncorporated = '';
    legalStatus = '';
}

export class Program {
    id = '';
    name = '';
}

export class PhysicalAddress {
    id = ''; 
    address1 = ''; 
    address2 = '';
    city = ''; 
    stateProvince = ''; 
    postalCode = ''; 
    country = 'USA'; 
}

export class ContactNumber {
    id = ''; 
    number = '';  
    extension = '';
    type = '';
}

export class RegularSchedule {
    id = ''; 
    weekday = ''; 
    opensAt = '';
    closesAt = '';
}

export class Contact {
    id = '';
    name = '';
    title = '';
}