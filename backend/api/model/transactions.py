from django.db import models
from sqlalchemy import create_engine, Text, Column, Integer, String, Float, DateTime, ForeignKey, CheckConstraint, text
from api.model.account import Account

class TransactionType(models.Model):
    transaction_type_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)

class Transaction(models.Model):
    txtransaction_id_id = models.AutoField(primary_key=True)
    uid = models.ForeignKey(Account, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_type = models.ForeignKey(TransactionType, on_delete=models.CASCADE)


