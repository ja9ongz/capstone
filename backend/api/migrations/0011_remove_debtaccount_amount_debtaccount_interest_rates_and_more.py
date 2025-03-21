# Generated by Django 5.0.12 on 2025-03-15 21:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_rename_so_id_savingsaccount_id_debtaccount'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='debtaccount',
            name='amount',
        ),
        migrations.AddField(
            model_name='debtaccount',
            name='interest_rates',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
        migrations.AddField(
            model_name='debtaccount',
            name='rental',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
        migrations.AddField(
            model_name='debtaccount',
            name='total',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
        migrations.AddField(
            model_name='debtaccount',
            name='utilities',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
    ]
