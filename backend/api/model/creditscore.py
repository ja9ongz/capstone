from django.db import models
from sqlalchemy import create_engine, Text, Column, Integer, String, Float, DateTime, ForeignKey, CheckConstraint, text
from datetime import datetime
from api.model.account import Account

class CreditScore(models.Model):
    cs_id = models.AutoField(primary_key=True)
    uid = models.ForeignKey(Account, on_delete=models.CASCADE)
    score = models.IntegerField(default=100)
    timestamp = models.DateTimeField(auto_now_add=True)
