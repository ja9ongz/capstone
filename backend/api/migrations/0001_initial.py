# Generated by Django 5.0.12 on 2025-03-08 14:00

import datetime
from django.db import migrations, models

def create_default_status(apps, schema_editor):
    Status = apps.get_model('api', 'Status')  # Replace 'myapp' with your app name
    Status.objects.create(id=1, name='New')


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('uid', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=150, unique=True)),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('profile_picture', models.TextField(blank=True, null=True)),
                ('date_of_birth', models.DateField(default=datetime.date.today)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
