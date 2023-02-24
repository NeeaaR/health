import datetime
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,BaseUserManager, PermissionsMixin
)

class UserManager(BaseUserManager):

    def create_user(self, username, email, password=None, **kwargs):
        """Create and return a `User` with an email, phone number, username and password."""
        if username is None:
            raise TypeError('Users must have a username.')
        if email is None:
            raise TypeError('Users must have an email.')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, username, email, password):
        """
        Create and return a `User` with superuser (admin) permissions.
        """
        if password is None:
            raise TypeError('Superusers must have a password.')
        if email is None:
            raise TypeError('Superusers must have an email.')
        if username is None:
            raise TypeError('Superusers must have an username.')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user

class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(db_index=True, unique=True,  null=True, blank=True)
    first_name = models.CharField(max_length=100, default="", unique=False)
    last_name = models.CharField(max_length=100, default="", unique=False)
    gender = models.CharField(max_length=100, default="", unique=False)
    age = models.CharField(max_length=100, default="", unique=False)
    health_card_number = models.CharField(max_length=13, default="1111111121", unique=True)
    picture = models.CharField(max_length=50, default="avatar1.jpg", unique=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return f"{self.email}"

class Doctor(User):
    speciality = models.CharField(max_length=30, default="", unique=False)

class Patient(User):
    balance = models.FloatField(default=0, unique=False)

class Visit(models.Model):
    date = models.DateTimeField()
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    comments = models.CharField(max_length=2000)

    def __unicode__(self):
        return '%s by  %s' % (self.patient, self.doctor)

class Medicament(models.Model):
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=500)
    grs = models.IntegerField()

    def __unicode__(self):
        return self.name

class Prescription(models.Model):
    visit = models.ForeignKey(Visit, on_delete=models.CASCADE)
    medicament = models.ForeignKey(Medicament, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    length = models.IntegerField()

    def __unicode__(self):
        return '%s | Prescribed by: %s (%s)' % (self.visit.patient, self.visit.doctor, self.visit.date)

    def patient(self):
        return self.visit.patient

    def doctor(self):
        return self.visit.patient

class AvailableSlot(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name="available_doctor")
    date = models.DateField()
    time = models.TimeField()

class Appointment(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='appointments_user')
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name="appointments_doctor")
    available_slot = models.ForeignKey(AvailableSlot, on_delete=models.CASCADE, related_name="available_slot")

