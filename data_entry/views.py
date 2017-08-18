# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def contacts(request):
    return render(request, 'data_entry/index.html')

def locations(request):
    return render(request, 'data_entry/index.html')

def organizations(request):
    return render(request, 'data_entry/organizations.html')

def services(request):
    return render(request, 'data_entry/index.html')

def add_organization(request):
    return render(request, 'data_entry/index.html')

def update_organization(request):
    return render(request, 'data_entry/index.html')

def delete_organization(request):
    return render(request, 'data_entry/index.html')

def sample_json(request):
    return render(request, 'data_entry/sample.json')
