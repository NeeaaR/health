from django.urls import path
from .views import indexView  # the view responsible for the frontend

urlpatterns = [
    path('', indexView),
]