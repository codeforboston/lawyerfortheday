# Lawyer for the day

The goal is to create an online unified repository of Massachusetts Courts "Lawyer for the Day" programs, and allow organizations to easily enter data about their programs to be shared with other organizations and websites.

This project will be implementing a password-protected front-end client for data entry and retrieval against this Open Referral API instance: http://developer.open.referral.adopta.agency/

This API backend will eventually be replaced with our own custom instance running the code here: https://github.com/adopta-agency/open-referral-api. Use the contacts listed in that README if you have any questions about their project.

Data from the 35 Court based programs on this list will be entered into a database via the API: https://www.masslegalservices.org/content/all-programs-legal-resource-finder

See the wiki for more details: https://github.com/codeforboston/lawyer-for-the-day/wiki

# Front-end Implementation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Back-end Implementation
In development, we are using https://github.com/adopta-agency/open-referral-api (implementation of HSDS v1.1, to be used for this project). This API prototype is a full application. It is a Amazon Aurora (MySQL compliant) database, with the API running on AWS EC2 Linux instance running Apache, coded in PHP 5.3. The prototype is currently going through an overhaul in support of version 1.2. Once done, there will be a live version, as well as a sandbox version. The code for the entire API will be available on Github for forking and download.

In production, we will clone an instance of this API server.
