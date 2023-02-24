import os 
import random
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Health.settings")

import django 
django.setup() 

from faker import Faker
from api.models import User, Doctor, Appointment, AvailableSlot

fake = Faker()


def random_date():
    return fake.date_between(start_date='-30d', end_date='+30d')

def random_time():
    return fake.time_object()

def create_users(N):
    for i in range(N):
        User.objects.create(
            username=fake.user_name(),
            uid=fake.md5(),
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            gender=fake.random_element(elements=("Male", "Female")),
            age=fake.random_int(min=18, max=100, step=1),
            mail=fake.email(),
            password=fake.password(),
            health_card_number=fake.ean(length=13),
            picture = fake.random_element(elements=("avatar1.jpg", "avatar2.jpg", "avatar3.jpg")),
            created_at=fake.date_time_this_decade()
        )

def create_doctors(N):
    for i in range(N):
        Doctor.objects.create(
            username=fake.user_name(),
            uid=fake.md5(),
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            gender=fake.random_element(elements=("Male", "Female")),
            age=fake.random_int(min=18, max=100, step=1),
            speciality=fake.random_element(elements=("Dentiste", "Dermatologue", "Gynécologue")),
            mail=fake.email(),
            health_card_number=fake.random_int(min=1000000000, max=99999999999, step=1),
            picture = fake.random_element(elements=("avatar1.jpg", "avatar2.jpg", "avatar3.jpg")),
            created_at=fake.date_time_this_decade()
        )

def create_appointments(N):
    for i in range(N):
        Appointment.objects.create(
            user=User.objects.get(id=random.randint(1, N)),
            doctor=Doctor.objects.get(id=random.randint(1, N)),
            date=random_date(),
            time=random_time()
        )

def create_availableSlots(N):
    for i in range(N):
        AvailableSlot.objects.create(
            doctor=Doctor.objects.get(id=random.randint(1, N)),
            date=random_date(),
            time=random_time()
        )

# def create_available_days(N):
#     for i in range(N):
#         AvailableDay.objects.create(
#             doctor=Doctor.objects.get(id=i+1),
#             day=fake.random_element(elements=("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"))
#         )

# def create_available_times(N):
#     for i in range(N):
#         AvailableTime.objects.create(
#             day=AvailableDay.objects.get(id=i+1),
#             time=random_time()
        # )

create_users(50)
create_doctors(50)
create_appointments(50)
create_availableSlots(50)
# create_available_days(50)
# create_available_times(70)