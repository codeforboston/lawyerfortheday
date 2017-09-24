export class Service {
    _id = '';
    _rev: null;
    //organization: Organization;
    organizationName = '';
    name = ''; 
    court = '';
    description = '';
    servicesProvided: string[];
    otherServicesProvided: '';
    geographicEligibility = '';
    financialEligibility = '';
    physicalAddress: PhysicalAddress;
    url = '';
    email = '';
    contactNumbers: ContactNumber[];
    contact: Contact;
    regularSchedules: RegularSchedule[];
    volunteerCapacity: ''
    training: '';
    appointmentRequired: false;
    applicationProcess = '';
    fees = '';
    otherDetails = '';
    editorName = '';
    editorEmail = '';
    editedAt = '';
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

export const ServicesProvidedOptions = [
    'Legal advice and/or information', 
    'Help with court forms and documents', 
    'May file limited appearance courtroom representation', 
    'Referrals to other service organizations',
    'Help identifying legal issues',
    'Limited representation in mediation'
];

export const VolunteerCapacityOptions = [
    'Insufficient',
    'Sufficient',
    'Excess',
    'Available to Assist'
];

export const TrainingOptions = [
    'Provided',
    'Required'
];

export const States = ['MA'];