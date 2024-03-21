from django.urls import path
from . import views


urlpatterns = [
    path('', views.Main, name='Login'),
    path('logout', views.Logout, name='Logout'),
    path('process', views.Process, name='Process'),
]
