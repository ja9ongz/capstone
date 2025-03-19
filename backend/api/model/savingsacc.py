from django.db import models
from sqlalchemy import create_engine, Text, Column, Integer, String, Float, DateTime, ForeignKey, CheckConstraint, text
from datetime import datetime
from api.model.account import Account

class SavingsAccount(models.Model):
    id = models.AutoField(primary_key=True)
    uid = models.ForeignKey(Account, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)

class DebtAccount(models.Model):
    id = models.AutoField(primary_key=True)
    uid = models.ForeignKey(Account, on_delete=models.CASCADE)
    rental = models.DecimalField(max_digits=10, decimal_places=2,default=0)
    utilities = models.DecimalField(max_digits=10, decimal_places=2,default=0)
    interest_rates = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    penalty_rates = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    total = models.DecimalField(max_digits=10, decimal_places=2,default=0)
    timestamp = models.DateTimeField(auto_now_add=True)