from django.db import models
from sqlalchemy import create_engine, Text, Column, Integer, String, Float, DateTime, ForeignKey, CheckConstraint, text

class SettingsAccount(models.Model):
    id = models.AutoField(primary_key=True)
    rental = models.IntegerField(default=0)
    utilities = models.IntegerField(null=True, default=0)
    interest_rates = models.IntegerField(null=True, default=0)
    penalty_rates = models.IntegerField(null=True, default=0)
    seconds = models.IntegerField(null=True, default=0)


    def __str__(self):
        return f"SettingsAccount {self.id} - Rental: {self.rental}, Utilities: {self.utilities}, Interest Rates: {self.interest_rates}"