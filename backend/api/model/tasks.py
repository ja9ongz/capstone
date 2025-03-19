from django.db import models
from sqlalchemy import create_engine, Text, Column, Integer, String, Float, DateTime, ForeignKey, CheckConstraint, text
from datetime import datetime
from api.model.account import Account
from api.model.status import Status
from django.utils import timezone

from django.db import models

class Task(models.Model):
    task_id = models.AutoField(primary_key=True)
    uid = models.ForeignKey(Account, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)
    completed_at = models.DateTimeField(null=True, blank=True)
    reward_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    difficulty = models.CharField(max_length=50, default="Easy")  
    status_id = models.ForeignKey(Status, on_delete=models.SET_NULL, null=True, default=1)
    tags = models.CharField(max_length=50, default='')

    def __str__(self):
        return self.title