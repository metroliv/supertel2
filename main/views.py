from django.shortcuts import render
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth

def home(request):
    return render(request, 'home.html')

def packages(request):
    return render(request, 'packages.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def login(request):
    return render(request, 'login.html')

def user_details(request):
    return render(request, 'user_details.html')

def payment(request):
    return render(request, 'payment.html')
