from django.urls import path
from . import views
from .views import RegisterView, GetAuthUserView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

urlpatterns = [
    path('', views.api_view()),
    path('auth', GetAuthUserView.as_view()),
    path('patient/register/', views.PatientView.as_view()),
    path('doctor/register/', views.DoctorView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('profile/me', views.ProfileView.as_view()),
    path('users/', views.UserList.as_view(), name='user-list'),
    path('users/add', RegisterView.as_view(), name="user-register"),
    path('users/<int:pk>/', views.UserDetail.as_view(), name='user-detail'),
    path('users/update/<int:pk>/', views.UserUpdate.as_view(), name='user-update'),
    path('users/delete/<int:pk>/', views.UserDelete.as_view(), name='user-delete'),
    path('doctors/', views.DoctorList.as_view(), name="doctor-list"),
    path('doctors/add', views.DoctorAdd.as_view(), name="doctor-add"),
    path('doctors/<int:pk>', views.DoctorDetail.as_view(), name="doctor-detail"),
    path('available/', views.AvailableSlot.as_view(), name="available-list"),
    path('available/<int:id>', views.AvailableSlot.as_view(), name="available-detail"),
    path('appointments/', views.AppointmentList.as_view(), name="appointments-list"),
    path('appointments/<int:pk>', views.Appointments.as_view(), name="appointments-detail"),
    path('appointments/delete/<int:pk>', views.AppointmentDelete.as_view(), name="appointments-detail"),
]