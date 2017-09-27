export class Service {
    _id = '';
    _rev: null;
    organizationName = '';
    name = '';
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
    volunteerCapacity: '';
    selectedCourt: '';
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

export const CourtOptions = [
  { name: 'Attleboro District Court' },
  { name: 'Ayer District Court' },
  { name: 'Barnstable County-Town of Plymouth Division of the Juvenile Court-Barnstable' },
  { name: 'Barnstable County Superior Court' },
  { name: 'Barnstable District Court' },
  { name: 'Barnstable Probate and Family Court' },
  { name: 'Berkshire County Juvenile Court-Pittsfield' },
  { name: 'Berkshire Probate and Family Court' },
  { name: 'Berkshire County Superior Court' },
  { name: 'Boston Housing Court' },
  { name: 'Brighton Division, Boston Municipal Court' },
  { name: 'Bristol County Juvenile Court-Fall River' },
  { name: 'Bristol Probate and Family Court' },
  { name: 'Bristol County Superior Court' },
  { name: 'Brockton District Court' },
  { name: 'Brookline District Court' },
  { name: 'Cambridge District Court' },
  { name: 'Central Division, Boston Municipal Court' },
  { name: 'Charlestown Division, Boston Municipal Court' },
  { name: 'Chelsea District Court' },
  { name: 'Chicopee District Court' },
  { name: 'Clinton District Court' },
  { name: 'Concord District Court' },
  { name: 'Dedham District Court' },
  { name: 'Dorchester Division, Boston Municipal Court' },
  { name: 'Dudley District Court' },
  { name: 'Dukes County Superior Court' },
  { name: 'Dukes Probate and Family Court' },
  { name: 'East Boston Division, Boston Municipal Court' },
  { name: 'East Brookfield District Court' },
  { name: 'Eastern Hampshire District Court' },
  { name: 'Edgartown District Court' },
  { name: 'Essex County Juvenile Court-Salem' },
  { name: 'Essex County Superior Court' },
  { name: 'Essex Probate and Family Court' },
  { name: 'Fall River District Court' },
  { name: 'Falmouth District Court' },
  { name: 'Fitchburg District Court' },
  { name: 'Framingham District Court' },
  { name: 'Franklin Probate and Family Court' },
  { name: 'Franklin County Superior Court' },
  { name: 'Franklin-Hampshire Counties Juvenile Court-Greenfield' },
  { name: 'Gardner District Court' },
  { name: 'Gloucester District Court' },
  { name: 'Greenfield District Court' },
  { name: 'Hampden County Juvenile Court-Springfield' },
  { name: 'Hampden Probate and Family Court' },
  { name: 'Hampden County Superior Court' },
  { name: 'Hampshire Probate and Family Court' },
  { name: 'Hampshire County Superior Court' },
  { name: 'Haverhill District Court' },
  { name: 'Hingham District Court' },
  { name: 'Holyoke District Court' },
  { name: 'Ipswich District Court' },
  { name: 'John Adams Courthouse' },
  { name: 'Land Court Department' },
  { name: 'Lawrence District Court' },
  { name: 'Leominster District Court' },
  { name: 'Lowell District Court' },
  { name: 'Lynn District Court' },
  { name: 'Malden District Court' },
  { name: 'Marlborough District Court' },
  { name: 'Middlesex County Juvenile Court-Cambridge' },
  { name: 'Middlesex Probate and Family Court' },
  { name: 'Middlesex County Superior Court' },
  { name: 'Milford District Court' },
  { name: 'Nantucket District Court' },
  { name: 'Nantucket Probate and Family Court' },
  { name: 'Nantucket County Superior Court' },
  { name: 'Natick District Court' },
  { name: 'New Bedford District Court' },
  { name: 'Newburyport District Court' },
  { name: 'Newton District Court' },
  { name: 'Norfolk County Juvenile Court-Dedham' },
  { name: 'Norfolk Probate and Family Court' },
  { name: 'Norfolk County Superior Court' },
  { name: 'Northampton District Court' },
  { name: 'Northeast Housing Court-Lawrence' },
  { name: 'Northern Berkshire District Court' },
  { name: 'Orange District Court' },
  { name: 'Orleans District Court' },
  { name: 'Palmer District Court' },
  { name: 'Peabody District Court' },
  { name: 'Pittsfield District Court' },
  { name: 'Plymouth County Juvenile Court-Brockton' },
  { name: 'Plymouth District Court' },
  { name: 'Plymouth Probate and Family Court' },
  { name: 'Plymouth County Superior Court' },
  { name: 'Quincy District Court' },
  { name: 'Roxbury Division, Boston Municipal Court' },
  { name: 'Salem District Court' },
  { name: 'Somerville District Court' },
  { name: 'South Boston Division, Boston Municipal Court' },
  { name: 'Southeast Housing Court-Fall River' },
  { name: 'Southern Berkshire District Court' },
  { name: 'Springfield District Court' },
  { name: 'Stoughton District Court' },
  { name: 'Suffolk County Juvenile Court-Boston' },
  { name: 'Suffolk Probate and Family Court' },
  { name: 'Suffolk County Superior Court' },
  { name: 'Taunton District Court' },
  { name: 'Uxbridge District Court' },
  { name: 'Waltham District Court' },
  { name: 'Wareham District Court' },
  { name: 'West Roxbury Division, Boston Municipal Court' },
  { name: 'Westborough District Court' },
  { name: 'Western Housing Court-Springfield' },
  { name: 'Westfield District Court' },
  { name: 'Winchendon District Court' },
  { name: 'Woburn District Court' },
  { name: 'Worcester County Juvenile Court-Worcester' },
  { name: 'Worcester County Superior Court' },
  { name: 'Worcester District Court' },
  { name: 'Worcester Housing Court-Leominster' },
  { name: 'Worcester Housing Court-Worcester' },
  { name: 'Worcester Probate and Family Court' },
  { name: 'Wrentham District Court' }
];


export const TrainingOptions = [
    'Provided',
    'Required'
];

export const States = ['MA'];
