# Generated by Django 5.0.12 on 2025-03-08 17:25

import django.db.models.deletion
from django.db import migrations, models

def create_default_status(apps, schema_editor):
    Status = apps.get_model('api', 'Status')  # Replace 'myapp' with your app name
    Status.objects.create(id=1, name='New')


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='parent_email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='parent_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.account'),
        ),
    ]
