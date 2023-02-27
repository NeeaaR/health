from rest_framework import serializers
from .models import User, Doctor, AvailableSlot, Appointment, Patient

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        
        return instance

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        
        return instance

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        
        return instance

class AvailableSlotSerializer(serializers.ModelSerializer):
    doctor = DoctorSerializer()
    
    class Meta:
        model = AvailableSlot
        fields = '__all__'

    def create(self, validated_data):
        doctor_data = validated_data.pop('doctor')
        doctor = Doctor.objects.get(id=doctor_data['id'])
        available_slot = AvailableSlot.objects.create(doctor=doctor, **validated_data)
        return available_slot

class AppointmentSerializer(serializers.ModelSerializer):
    patient = PatientSerializer()
    doctor = DoctorSerializer()
    class Meta:
        model = Appointment
        fields = ('id', 'patient', 'doctor', 'date', 'time')

    def create(self, validated_data):
        patient_data = validated_data.pop('patient')
        doctor_data = validated_data.pop('doctor')
        patient = Patient.objects.get(id=patient_data['id'])
        doctor = Doctor.objects.get(id=doctor_data['id'])
        appointment = Appointment.objects.create(patient=patient, doctor=doctor, **validated_data)
        return appointment
    
