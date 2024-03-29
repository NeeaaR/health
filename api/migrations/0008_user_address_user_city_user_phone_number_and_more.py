# Generated by Django 4.1.7 on 2023-03-05 20:32

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_article'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='address',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='user',
            name='city',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='user',
            name='phone_number',
            field=models.CharField(default=33615058531, max_length=20, validators=[django.core.validators.RegexValidator(message='Entrer un numéro de téléphone valide', regex='^\\+33\\s?(0|\\(0\\))\\s?[1-9](?:[\\s.-]?[0-9]{2}){4}$')]),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='zip_code',
            field=models.CharField(default=77600, max_length=10, validators=[django.core.validators.RegexValidator(message='Enter a valid French postal code', regex='^\\d{5}$')]),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='user',
            name='health_card_number',
            field=models.CharField(max_length=15, validators=[django.core.validators.RegexValidator(message='Entrer un numéro de carte de sécurité sociale valide', regex='^[1-3]\\d{14}$')]),
        ),
    ]
