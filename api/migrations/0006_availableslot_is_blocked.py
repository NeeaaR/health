# Generated by Django 4.1.7 on 2023-03-02 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_user_created_at_user_is_doctor_user_is_patient_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='availableslot',
            name='is_blocked',
            field=models.BooleanField(default=False),
        ),
    ]