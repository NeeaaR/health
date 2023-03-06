import datetime
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin
)
from django.utils import timezone
from django.core.validators import RegexValidator


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
    email = models.EmailField(
        db_index=True, unique=True,  null=True, blank=True)
    first_name = models.CharField(max_length=100, default="", unique=False)
    last_name = models.CharField(max_length=100, default="", unique=False)
    gender = models.CharField(max_length=100, default="", unique=False)
    age = models.CharField(max_length=100, default="", unique=False)
    health_card_number = models.CharField(
        max_length=15,
        validators=[RegexValidator(
            regex=r'^[1-3]\d{14}$',
            message='Entrer un numéro de carte de sécurité sociale valide',
        )]
    )
    picture = models.CharField(
        max_length=50, default="avatar1.jpg", unique=False)
    zip_code = models.CharField(max_length=10, validators=[RegexValidator(
        regex=r'^\d{5}$', message='Enter a valid French postal code',)])
    city = models.CharField(max_length=100, default="", unique=False)
    address = models.CharField(max_length=100, default="", unique=False)
    phone_number = models.CharField(
        max_length=20,
        validators=[RegexValidator(
            regex=r'^\+33\s?(0|\(0\))\s?[1-9](?:[\s.-]?[0-9]{2}){4}$',
            message='Entrer un numéro de téléphone valide',
        )]
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_doctor = models.BooleanField(default=False)
    is_patient = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

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
    doctor = models.ForeignKey(
        Doctor, on_delete=models.CASCADE, related_name="available_doctor")
    date = models.DateField()
    time = models.TimeField()
    is_blocked = models.BooleanField(default=False)


class Appointment(models.Model):
    patient = models.ForeignKey(
        Patient, on_delete=models.CASCADE, related_name='appointments_user')
    doctor = models.ForeignKey(
        Doctor, on_delete=models.CASCADE, related_name="appointments_doctor")
    available_slot = models.ForeignKey(
        AvailableSlot, on_delete=models.CASCADE, related_name="available_slot")


class Article(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    image = models.CharField(max_length=500, default="", unique=False)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title
