from django.conf.urls import include, url
from django.contrib import admin
from website import views

urlpatterns = [
        url(r'^$', views.index, name='index'),
]