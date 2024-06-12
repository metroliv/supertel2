from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('packages/', views.packages, name='packages'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('login/', views.login, name='login'),
    path('user_details/', views.user_details, name='user_details'),
    path('payment/', views.payment, name='payment'),
]
