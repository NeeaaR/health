from django.urls import path
from . import views
from .views import GetAuthUserView, ReservedSlotIds
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
    path('profile/<int:user_id>/', views.ProfileView.as_view()),
    path('profile/me', views.ProfileView.as_view()),
    path('users/', views.UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', views.SingleUserView.as_view(), name='user-detail'),
    path('users/update/<int:pk>/', views.UserUpdate.as_view(), name='user-update'),
    path('users/delete/<int:pk>/', views.UserDelete.as_view(), name='user-delete'),
    path('doctors/', views.Doctors.as_view(), name="doctor-list"),
    path('doctors/<int:doctor_id>/reserved-slots/', ReservedSlotIds.as_view()),
    path('doctors/<int:pk>', views.DoctorDetail.as_view(), name="doctor-detail"),
    path('availables/', views.AvailableSlots.as_view(), name="available-list"),
    path('availables/<int:id>', views.AvailableSlots.as_view(), name="available-detail"),
    path('appointments/', views.Appointments.as_view(), name="appointments-list"),
    path('appointments/<int:id>', views.Appointments.as_view(), name="appointments-detail"),
    path('appointments/delete/<int:id>', views.AppointmentDelete.as_view(), name="appointments-detail"),
    path('articles/', views.Articles.as_view(), name="article"),
    path('articles/<int:id>', views.Articles.as_view(), name="article"),
    path('articles_list/', views.ArticlesList.as_view(), name="article"),

]