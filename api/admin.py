from django.contrib import admin
from api.models import *

# Register your models here.

@admin.register(User,Doctor,Appointment,AvailableSlot, Patient, Prescription, Article)
class GenericAdmin(admin.ModelAdmin):
    pass