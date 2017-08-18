# lawyer_for_the_day

The goal is to create an online unified repository of Massachusetts Courts "Lawyer for the Day" programs, and allow organizations to easily enter data about their programs to be shared with other organizations and websites.

This project will be implementing a password-protected front-end client for data entry and retrieval against this Open Referral API instance: http://developer.open.referral.adopta.agency/

This API backend will eventually be replaced with our own custom instance running the code here: https://github.com/adopta-agency/open-referral-api. Use the contacts listed in that README if you have any questions about their project.

Data from the 35 Court based programs on this list will be entered into a database via the API: https://www.masslegalservices.org/content/all-programs-legal-resource-finder

See the wiki for more details: https://github.com/codeforboston/lawyer-for-the-day/wiki

## Installation

* Install Django(https://docs.djangoproject.com) and Python on local machine (this project was developed with Python 2.7.10, Django 1.11.3
* Clone project to local directory
    ```
    cd lawyer_for_the_day/
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```
* Get organizations page: http://127.0.0.1:8000/organizations/
