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

class GetProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'phone', 'address', 'city', 'state', 'country', 'postal_code', 'is_doctor', 'is_patient')

class AvailableSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvailableSlot
        fields = ('id', 'doctor', 'date', 'time')

    def create(self, validated_data):
        slot = AvailableSlot.objects.create(**validated_data)
        return slot

    def update(self, instance, validated_data):
        instance.user = validated_data.get('user', instance.user)
        instance.doctor = validated_data.get('doctor', instance.doctor)
        instance.date = validated_data.get('date', instance.date)
        instance.heure = validated_data.get('heure', instance.heure)
        instance.save()
        return instance

class AppointmentSerializer(serializers.ModelSerializer):
    patient = PatientSerializer()
    doctor = DoctorSerializer()
    class Meta:
        model = Appointment
        fields = '__all__'

    def create(self, validated_data):
        patient_data = validated_data.pop('patient')
        doctor_data = validated_data.pop('doctor')
        patient = Patient.objects.get(id=patient_data['id'])
        doctor = Doctor.objects.get(id=doctor_data['id'])
        appointment = Appointment.objects.create(patient=patient, doctor=doctor, **validated_data)
        return appointment
    
