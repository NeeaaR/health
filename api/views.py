from rest_framework import generics
from .models import User, Doctor, AvailableSlot, Appointment, Patient
from .serializers import UserSerializer, PatientSerializer, DoctorSerializer, AvailableSlotSerializer, AppointmentSerializer

from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate
from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import APIView,api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework import status

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['name'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh'
    ]
    
    return JsonResponse(routes)

class UserView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            token = Token.objects.get(user_id=serializer.data.get('id'))
            return Response(data={'token': token.key}, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PatientView(APIView):
    permission_classes = (AllowAny,)
    
    def post(self, request):
        serializer = PatientSerializer(data=request.data)
        if serializer.is_valid():
            patient = serializer.save()
            patient.password = make_password(patient.password)
            patient.save()
            token = Token.objects.get_or_create(user=patient)
            return Response(data={'token': token[0].key}, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DoctorView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        doctors = Doctor.objects.all()
        serializer = DoctorSerializer(doctors, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DoctorSerializer(data=request.data)
        if serializer.is_valid():
            doctor = serializer.save()
            doctor.password = make_password(doctor.password)
            doctor.save()
            token = Token.objects.get_or_create(user=doctor)
            return Response(data={'token': token[0].key}, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserUpdate(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SingleProfileView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            user = User.objects.get(id=kwargs.get('id'))
            profile_data = GetProfileSerializer(user.profile).data
            return Response(data=profile_data, status=status.HTTP_200_OK)
            
        except ObjectDoesNotExist:
            return Response(data={'error': "No profile found"}, status=status.HTTP_404_NOT_FOUND)

class UserDelete(generics.DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class DoctorList(generics.ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class DoctorDetail(generics.RetrieveAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class DoctorAdd(generics.CreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class AvailableSlotList(generics.ListAPIView):
    queryset = AvailableSlot.objects.all()
    serializer_class = AvailableSlotSerializer

class AvailableSlotDetail(generics.RetrieveAPIView):
    queryset = AvailableSlot.objects.all()
    serializer_class = AvailableSlotSerializer

class AppointmentList(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class AppointmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class AppointmentDelete(generics.DestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer    


class GetAuthUserView(APIView):
    authentication_classes = (TokenAuthentication,)

    def get(self, request):
        token = request.headers.get('Authorization')
        if not token:
            return Response(data={'error':'No Token. Authorization Denied'}, status=status.HTTP_401_UNAUTHORIZED)
        #if user is doctor or patient
        if token[6] == 'D':
            user = Doctor.objects.get(id=request.user.id)
        elif token[6] == 'P':
            user = Patient.objects.get(id=request.user.id)
        else:

            user = User.objects.get(id=request.user.id)
            data = UserSerializer(user).data
            return Response(data)
        
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        if email == "" or password == "":
            return Response({'error': 'Please provide both email and password'},status=status.HTTP_400_BAD_REQUEST)
        
        user = authenticate(username=email, password=password)

        if not user:
            return Response({'error': 'Invalid Credentials'},status=status.HTTP_404_NOT_FOUND)

        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=status.HTTP_200_OK)

class ProfileView(APIView):

    def get (self, request, user_id, *args, **kwargs):

        user = User.objects.get(id=user_id)
        print(user)
        if user.is_doctor:
            profile = Doctor.objects.get(id=user.id)
            serializer = DoctorSerializer(profile)
            available_slots = AvailableSlot.objects.filter(doctor=profile)
            available_slots_serializer = AvailableSlotSerializer(available_slots, many=True)
            appointments = Appointment.objects.filter(doctor=profile)
            appointments_serializer = AppointmentSerializer(appointments, many=True)
            data = {
                'profile' : serializer.data,
                'appointments' : appointments_serializer.data,
                'available_slots' : available_slots_serializer.data
            }
        elif user.is_patient:
            profile = Patient.objects.get(id=user.id)
            serializer = PatientSerializer(profile)
            appointments = Appointment.objects.filter(patient=profile)
            appointments_serializer = AppointmentSerializer(appointments, many=True)
            data = {
                'profile' : serializer.data,
                'appointments' : appointments_serializer.data
            }
        else:
            return Response(data={'error': "No profile found"}, status=status.HTTP_404_NOT_FOUND)

        return Response(data=data, status=status.HTTP_200_OK)

class SingleUserView(APIView):

    def get(self, request, *args, **kwargs):
        try:
            user = User.objects.get(id=kwargs.get('pk'))
            data = UserSerializer(user).data
            return Response(data=data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response(data={'error': "No user found"}, status=status.HTTP_404_NOT_FOUND)

class AvailableSlots(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    
    def get(self, request, *args, **kwargs):
        try:
            slots = AvailableSlot.objects.filter(doctor=request.user)
            data = AvailableSlotSerializer(slots, many=True).data
            return Response(data=data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response(data={'error': "No slots found"}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request, *args, **kwargs):
        user = request.user
        serializer = AvailableSlotSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, *args, **kwargs):
        try:
            slot = AvailableSlot.objects.get(id=kwargs.get('id'))
            slot.delete()
            return Response(data={'message': "Slot deleted"}, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response(data={'error': "No slot found"}, status=status.HTTP_404_NOT_FOUND)
        
class Appointments(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        try:
            appointments = Appointment.objects.filter(doctor=request.user)
            data = AppointmentSerializer(appointments, many=True).data
            return Response(data=data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response(data={'error': "No appointments found"}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request): 
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        try:
            appointment = Appointment.objects.get(id=kwargs.get('id'))
            appointment.delete()
            return Response(data={'message': "Appointment deleted"}, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response(data={'error': "No appointment found"}, status=status.HTTP_404_NOT_FOUND)
