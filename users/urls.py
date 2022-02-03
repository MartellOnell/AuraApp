from unicodedata import name
from django.urls import path
from . import views

app_name = "users"
urlpatterns = [
    path('bruh/', views.index, name="index")
]