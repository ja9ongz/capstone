from django.db import models
from sqlalchemy import create_engine, Text, Column, Integer, String, Float, DateTime, ForeignKey, CheckConstraint, text
from datetime import datetime
from django.utils import timezone

class Rewards(models.Model):
    reward_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    reward_cost = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    reward_quantity = models.IntegerField(default=0)
    image = models.TextField(null=True, blank=True) 
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title
