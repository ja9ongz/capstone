from django.db import models
from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, ForeignKey, CheckConstraint, text
from datetime import datetime
from api.model.account import Account

class Wallet(models.Model):
    id = models.AutoField(primary_key=True)
    uid = models.ForeignKey(Account, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)


